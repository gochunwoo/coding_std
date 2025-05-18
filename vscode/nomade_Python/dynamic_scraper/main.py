# 웹 브라우저를 자동으로 컨트롤(크롬,파이어폭스,등.. 실제 브라우저를 코드로 조작할수있음)
from playwright.sync_api import sync_playwright
import time # 코드실행에 시간을줘서 웹페이지가 모두 뜰 때까지 멈춤
# BeautifulSoup : HTML문서를 구조적으로 분석해서 원하는 태그나 정보를 쉽게뽑아냄(파싱)
from bs4 import BeautifulSoup
import csv # 내장모듈,리스트/딕셔너리등의 데이터를 쉼표로 구분된표형실(csv) 파일로 저장

class Job: # 채용공고한건 의 모든 정보를 저장하는객체(데이터묶음,Entity)
    # 각각의 정보를 받아서 멤버 변수(title, company_name, reward, link)에 저장함
    def __init__(self, title, company_name, reward, link):
        self.title = title
        self.company_name = company_name
        self.reward = reward
        self.link = link

    def to_list(self): # 각각의 인스턴스의 정보를 배열 형태로 리스트로 변환
        return [self.title, self.company_name, self.reward, self.link]

class JobCrawler: # 크롤링 전체 과정을 관리하는 "주체 객체"
    # 크롤링할 대상페이지의 
    def __init__(self, url, scroll_count=5): 
        self.url = url
        self.scroll_count = scroll_count
        self.jobs = []

    def fetch_html(self): 
        p = sync_playwright().start() # 자동화 시스템을 동기방식으로 코드를 순차적으로 실행
        browser = p.chromium.launch(headless=False) # 브라우저를 새로 실행을하고, headless=False -> False이므로 창을 뛰어서 봄  
        page = browser.new_page() # 브라우저를 새탭
        page.goto(self.url) # url주소창으로 이동
        for _ in range(self.scroll_count): 
            # 실행된페이지에서 5번 스크롤을 반복함
            time.sleep(1) # 1초딜레이
            page.keyboard.down("End") # 키보드에서 end키 누름
        content = page.content() # 5번페이지 실행
        p.stop() # 멈춤
        return content # 페이지5번스크롤을반환

    def parse_jobs(self, html): # 데이터 추출을위한 함수
        soup = BeautifulSoup(html, "html.parser") # HTML전체 소스를 BeautifulSoup 객체로 변환 
        job_cards = soup.find_all("div", class_="JobCard_container__zQcZs") # 모든 채용공고 div태그의 클래스는JobCard...fmf cncnf
        jobs = [] # 뽑아낸 job객체들을 저장할 리스트

        for job_card in job_cards: # link,title,company,reward 에 채용공고를 하나씩 순회하며 저장함
            link = f"https://www.wanted.co.kr{job_card.find('a')['href']}"
            title = job_card.find("strong", class_="JobCard_title___kfvj").text
            company_name = job_card.find("span", class_="JobCard_companyName__kmtE0").text
            reward = job_card.find("span", class_="JobCard_reward__oCSIQ").text

            job = Job(title, company_name, reward, link) # 위에서 하나씩 추출한 데이터를 객체생성해서
            jobs.append(job) # 만들어진 job 객체를 리스트에 추가
        self.jobs = jobs # 임시리스트를 클래스 멤버변수(self.jobs)로 저장후 출력에 사용

    def save_to_csv(self, filename="Backend.csv"): # job객체 리스트를csv파일로 한줄씩 기록
        with open(filename, "w", encoding="utf-8", newline='') as file:
            writer = csv.writer(file) # csv파일을 한줄씩 쓰는 writer 객체 생성
            writer.writerow(["Title", "Company", "Reward", "Link"]) # 제목,회사명,리워드,링크 컬럼으로 지정
            for job in self.jobs: # 수집한 job객체를 하나씩 꺼내서
                writer.writerow(job.to_list()) # 객체의 정보를 리스트로 변환해서 csv파일에 기록

def main(): # 구조화된 데이터 관리를 위한 함수
    url = "https://www.wanted.co.kr/search?query=flutter&tab=position"
    crawler = JobCrawler(url, scroll_count=5) # url과 스크롤 횟수설정
    html = crawler.fetch_html() # 크롤링및 HTML획득
    crawler.parse_jobs(html) # BeautifulSoup 정보 추출
    crawler.save_to_csv("Backend.csv") # csv파일로 저장

if __name__ == "__main__": # 이코드를 직접 실행할 때만 main함수가 동작하도록함(모듈로 불러올땐 자동실행x)
    main()
