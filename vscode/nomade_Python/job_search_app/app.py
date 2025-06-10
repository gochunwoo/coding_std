from flask import Flask, render_template, request, send_file
import csv
import os
import time
from extractors.wanted import extract_wanted_jobs
from extractors.wwr import extract_wwr_jobs

app = Flask(__name__)

all_jobs = [] # 크롤링 결과를 저장할 전역 리스트

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/search", methods=["POST"]) # 검색폼 제출시
def search():
    global all_jobs
    keyword = request.form.get("keyword") # 폼에서 검색어를 가져옴
    if not keyword:
        return render_template("home.html", error="검색어를 입력해주세요.")

    print(f"[앱] '{keyword}' 키워드로 검색을 시작합니다.")
    # 원티드/WWR 사이트에서 검색결과 가져오기
    wanted_jobs = extract_wanted_jobs(keyword)
    wwr_jobs = extract_wwr_jobs(keyword)
    
    all_jobs = wanted_jobs + wwr_jobs # 결과를 합쳐서 all_jobs에 저장
    print(f"[앱] 총 {len(all_jobs)}개의 채용 정보를 찾았습니다.")

    if all_jobs:
        app.config['last_search_keyword'] = keyword # 파일명에 쓸 수 있게 저장

    # 결과 페이지에 jobs(결과)와 keyword(검색어) 전달
    return render_template("results.html", keyword=keyword, jobs=all_jobs)

@app.route("/export")
def export():
    global all_jobs
    if not all_jobs:
        print("[앱] 내보낼 데이터가 없습니다.")
        return "No data to export", 404

    #파일로 저장
    timestamp = int(time.time())
    keyword_for_filename = app.config.get('last_search_keyword', 'export')
    filename = f"jobs_{keyword_for_filename}_{timestamp}.csv"
    filepath = os.path.join(os.getcwd(), filename)

    print(f"[앱] CSV 파일을 생성합니다: {filepath}")

    try:
        # csv 파일로 결과 쓰기
        with open(filepath, "w", newline="", encoding="utf-8") as file:
            writer = csv.writer(file)
            writer.writerow(["Title", "Company", "Reward", "Link"])
            for job in all_jobs:
                writer.writerow([
                    job.get('title', ''),
                    job.get('company', ''),
                    job.get('reward', ''),
                    job.get('link', '')
                ])
        print(f"[앱] CSV 파일 생성 완료: {filepath}")

        # 파일을 사용자에게 전송 (다운로드)
        response = send_file(filepath, as_attachment=True)
        print(f"[앱] 파일을 사용자에게 전송합니다: {filename}")

        # 다운로드 후 임시 파일 삭제
        try:
            os.remove(filepath)
            print(f"[앱] 전송 후 임시 CSV 파일 삭제 완료: {filepath}")
        except Exception as e:
            print(f"[앱] 경고: CSV 파일 삭제 실패 {filepath}: {e}")

        return response
        
    except Exception as e:
        print(f"[앱] CSV 파일 생성 또는 전송 중 오류 발생: {e}")
        return f"Error generating or sending file: {e}", 500

if __name__ == "__main__":
    app.run(debug=True)
