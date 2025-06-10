from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
import time

def extract_wanted_jobs(keyword, scroll_count=5):
    # 검색어를 포함한 원티드 검색 URL 생성
    url = f"https://www.wanted.co.kr/search?query={keyword}&tab=position"
    jobs = []
    print(f"[원티드] {url} 주소로 이동합니다.")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)   # 브라우저를 headless 모드로 실행
        page = browser.new_page()
        
        # User-Agent 지정 (차단 우회)
        page.set_extra_http_headers({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
        })

        try:
            page.goto(url)     # 지정한 URL로 이동
            print(f"[원티드] 페이지 로딩 완료. 총 {scroll_count}회 스크롤합니다.")
            time.sleep(3)      # 초기 로딩 대기
            for i in range(scroll_count):  # 여러 번 스크롤
                time.sleep(2)
                page.keyboard.down("End")
                print(f"[원티드] {i+1}/{scroll_count}회 스크롤 완료")
            html = page.content()     # HTML 코드 전체 읽기
            print("[원티드] 페이지 내용을 캡처했습니다.")
        except Exception as e:
            print(f"[원티드] 페이지 이동 또는 스크롤 중 오류: {e}")
            return []
        finally:
            browser.close()
            print("[원티드] 브라우저를 종료합니다.")
            
    soup = BeautifulSoup(html, "html.parser")
    # JobCard_container__zQcZs 클래스를 가진 div만 모두 뽑아옴
    job_cards = soup.find_all("div", class_="JobCard_container__zQcZs")
    print(f"[원티드] {len(job_cards)}개의 채용 카드(div)를 찾았습니다.")
    
    for i, job_card in enumerate(job_cards):
        try:
            link_tag = job_card.find('a')
            link = f"https://www.wanted.co.kr{link_tag['href']}" if link_tag and 'href' in link_tag.attrs else ""
            
            title_tag = job_card.find("strong", class_="JobCard_title___kfvj")
            title = title_tag.text.strip() if title_tag else ""
            
            company_tag = job_card.find("span", class_="JobCard_companyName__kmtE0")
            company_name = company_tag.text.strip() if company_tag else ""
            
            reward_tag = job_card.find("span", class_="JobCard_reward__oCSIQ")
            reward = reward_tag.text.strip() if reward_tag else ""
            
            # 모든 정보가 있을 때만 저장
            if title and company_name and reward:
                 jobs.append({
                    "title": title,
                    "company": company_name,
                    "reward": reward,
                    "link": link
                })
                 print(f"[원티드] {i+1}번째 채용 정보 저장: {title}")
            else:
                 print(f"[원티드] {i+1}번째 채용 정보 누락(제목: {bool(title)}, 회사: {bool(company_name)}, 보상: {bool(reward)})로 건너뜀")

        except Exception as e:
            print(f"[원티드] {i+1}번째 채용 정보 처리 중 오류: {e}")
            continue

    print(f"[원티드] 스크래핑 완료! 총 수집 건수: {len(jobs)}")
    return jobs
