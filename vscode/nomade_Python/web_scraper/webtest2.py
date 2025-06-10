import cloudscraper  # 클라우드플레어 우회 요청을 위해 cloudscraper 사용
from bs4 import BeautifulSoup  # HTML 파싱용 라이브러리
import sys

sys.stdout.reconfigure(encoding='utf-8')

# cloudscraper를 사용해 우회된 요청 객체 생성
scraper = cloudscraper.create_scraper()

url = "https://weworkremotely.com/"

response = scraper.get(url)

# BeautifulSoup을 사용하여 HTML 파싱
soup = BeautifulSoup(response.text, "html.parser")

# 'section' 태그 중 class가 'jobs'인 부분에서 <li>들만 추출 (첫 번째 광고 li 제거, 마지막 li 제거)
jobs = soup.find("section", class_="jobs").find_all("li")[1:-1]

all_jobs = []  # 결과를 누적할 빈 리스트

# 모든 일자리 정보를 하나씩 순회
for job in jobs:
    # 회사명과 제목은 각각 태그를 지정해서 추출
    title_tag = job.find("h4", class_="new-listing__header__title")  # 일자리 제목
    company_tag = job.find("p", class_="new-listing__company-name")  # 회사 이름
    region_tags = job.find_all("p", class_="new-listing__categories__category")  # 지역 정보 여러 개일 수도 있음

    # 추출한 값이 None일 수 있으므로, 존재할 경우만 텍스트로 가져오기 (안전하게 처리)
    title = title_tag.text.strip() if title_tag else "N/A"
    company = company_tag.text.strip() if company_tag else "N/A"
    position = title  # position은 title과 동일하게 사용
    region = region_tags[-1].text.strip() if region_tags else "N/A"  # 마지막 카테고리를 지역으로 사용

    # 채용 상세 링크 추출: <a> 태그의 href 속성
    link_tag = job.find("a")  # 첫 번째 a 태그
    url = "https://weworkremotely.com" + link_tag["href"] if link_tag else "N/A"

    # 딕셔너리 형태로 하나의 일자리 정보 저장
    job_data = {
        "title": title,
        "company": company,
        "position": position,
        "region": region,
        "url": url
    }

    # 리스트에 추가
    all_jobs.append(job_data)

# 모든 일자리 출력
print(all_jobs)

'''
정의 및 개념정리

cloudsraper란?
- 클라우드플레어(cf) 같은 웹사이트 방어 시스템을 우회하여 html페이지를 가져오게 도와주는 라이브러리
- 보통 requests로 막힌 사이트도 cloudscraper로 접근 가능.

Beautifulsoup란?
-html 또는 xml 문서를 쉽게 파싱(분석)해서, 원하는 데이터를 뽑아낼 수 있도록 도와주는라이브러리
- find() , find_all() 등을 통해 태그와 클래스명을 기준으로 원하는 데이터를추출할수 있다

HTML 구조 파싱
- soup.find(): 지정된 태그/클래스를 가진 첫 번째 요소 반환
- soup.find_all(): 지정된 요소를 리스트 형태로 반환

text 와 .strip()
- text : 태그안에 있는 실제 텍스트 내용을 가져옴
- .strip(): 앞뒤의 공백 제거 (더 깔끔하게 출력됨)

href 추출 방식
- <a href="/remote-jobs/1234"> 구조라면, a_tag["href"] 을 통해  /remote-jobs/1234 를 가져올 수 있음
- 보통 상대경로(relative path)이므로 앞에 base URL을 붙여줘야 함.

예외처리
- find() 는 해당 태그가 없으면 None 을 반환하므로, text나 strip() 을 바로 쓰면 오류 발생
- 따라서 if 태그 else "N/A" 방식으로 처리

'''