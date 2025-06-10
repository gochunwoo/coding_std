import cloudscraper                     # Cloudflare 우회용 요청 도구
from bs4 import BeautifulSoup           # HTML 파싱용 라이브러리
import sys                              # 콘솔 출력 설정을 위한 모듈

sys.stdout.reconfigure(encoding='utf-8')  # 콘솔 출력 인코딩을 UTF-8로 설정 (한글 깨짐 방지)

scraper = cloudscraper.create_scraper()  # 크롤링용 Scraper 객체 생성
all_jobs = []  # 최종 수집된 공고를 저장할 리스트

# 하나의 페이지에서 공고 데이터를 수집하는 함수
def scrape_page(url):
    response = scraper.get(url)  # 해당 URL에 요청 보내기
    soup = BeautifulSoup(response.text, "html.parser")  # HTML 파싱

    # 'jobs'라는 섹션 내부의 li 태그들만 수집 (맨 앞/뒤 광고 제외)
    jobs = soup.find("section", class_="jobs").find_all("li")[1:-1]
    
    for job in jobs:
        # 제목, 회사, 지역 정보를 각각 추출 (태그가 없을 경우 'N/A'로 처리)
        title_tag = job.find("h4", class_="new-listing__header__title")
        company_tag = job.find("p", class_="new-listing__company-name")
        region_tags = job.find_all("p", class_="new-listing__categories__category")

        title = title_tag.text.strip() if title_tag else "N/A"
        company = company_tag.text.strip() if company_tag else "N/A"
        position = title
        region = region_tags[-1].text.strip() if region_tags else "N/A"

        # 공고 상세 페이지로 연결되는 링크 추출
        link_tag = job.find("a")
        url = "https://weworkremotely.com" + link_tag["href"] if link_tag else "N/A"

        # 딕셔너리로 구성
        job_data = {
            "title": title,
            "company": company,
            "position": position,
            "region": region,
            "url": url
        }

        all_jobs.append(job_data)  # 수집한 정보를 리스트에 추가

# 백엔드 카테고리 페이지에서 공고 수집 시작
category_url = "https://weworkremotely.com/categories/remote-back-end-programming-jobs"
scrape_page(category_url)

# 수집 결과 출력
for job in all_jobs:
    print(job)

print("총 공고 수:", len(all_jobs))  # 전체 공고 개수 출력

'''
개념 요약

- weworkremotely.com은 페이지 번호가 없음 (ex. ?page=2 같은 방식 없음)
- 한 카테고리 URL에 모든 공고가 한 번에 출력됨
- 스크롤 없이 HTML 내부에 이미 모든 데이터가 있음

기술 요약

- cloudscraper: Cloudflare 우회 가능
- BeautifulSoup: HTML 파싱 후 원하는 태그만 추출 가능
- .text / .content: .text는 문자열, .content는 바이너리 (여기선 .text 사용)
- all_jobs.append(job_data): 반복문 내부에 반드시 위치해야 데이터 누적됨
'''
