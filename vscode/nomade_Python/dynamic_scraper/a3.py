from playwright.sync_api import sync_playwright
import time #시간모듈
from bs4 import BeautifulSoup
import csv


p = sync_playwright().start()

browser = p.chromium.launch(headless=False)

page = browser.new_page()

page.goto("https://www.wanted.co.kr/search?query=flutter&tab=position")

# time.sleep(5) # 재우기7초

# page.click("button.Aside_searchButton__Ib5Dn") 

# time.sleep(5)

# page.get_by_placeholder("검색어를 입력해 주세요.").fill("flutter")

# time.sleep(5)

# page.keyboard.down("Enter")

# time.sleep(5)

# page.click("a#search_tab_position")

for x in range(5):
    time.sleep(1)
    page.keyboard.down("End")

content = page.content()

p.stop()

soup = BeautifulSoup(content,"html.parser")

jobs = soup.find_all("div", class_="JobCard_container__zQcZs")

jobs_db = [] # 채용정보를 담을 객체를만듭니다다

for job in jobs: # 각각의 데이터 추출
    link = f"https://www.wanted.co.kr{job.find('a')['href']}"
    title = job.find("strong",class_="JobCard_title___kfvj").text
    company_name= job.find("span",class_="JobCard_companyName__kmtE0").text
    reward = job.find("span",class_="JobCard_reward__oCSIQ").text

    job = { # 추출한데이터를 하나의 딕셔너리로 묶음
        "title":title,
        "company_name":company_name,
        "reward":reward,
        "link":link
    }
    jobs_db.append(job) # 만든 딕셔너리를 리스트에 추가

    file = open("jobs.csv","w",encoding="utf-8") #csv파일을 쓰기 모드
    writter = csv.writer(file) # csv파일에 행 단위로 쓸 writer객체 생성
    writter.writerow(
    [
        # 컬럼명작성
        "Title",
        "Company",
        "Reward",
        "Link"
    ]
)
for job in jobs_db:
    writter.writerow(job.values())
    file.close