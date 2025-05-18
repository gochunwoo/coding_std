from playwright.sync_api import sync_playwright
import time #시간모듈
from bs4 import BeautifulSoup

p = sync_playwright().start()

browser = p.chromium.launch(headless=False)

page = browser.new_page()

page.goto("https://www.wanted.co.kr/jobsfeed")

time.sleep(5) # 재우기7초

page.click("button.Aside_searchButton__Ib5Dn") 
# click: Playwright에서 **웹 페이지 안의 특정 요소를 '마우스로 클릭'**하게 해주는 함수
# button -> 태그  Aside_search.... -> 클래스

time.sleep(5)

page.get_by_placeholder("검색어를 입력해 주세요.").fill("flutter")
#검색어를 입력해 주세요인 input를 찾는함수
# fill 찾은 입력창에 flutter라는 글자를 자동으로 입력해주는 함수

time.sleep(5)

page.keyboard.down("Enter")
# keyboard 키보드의 특정키 누르는 함수수
time.sleep(5)

page.click("a#search_tab_position")

for x in range(5):
    time.sleep(5)
    page.keyboard.down("End")
    # End반복 누름

content = page.content()

p.stop()

soup = BeautifulSoup(content,"html.parser")
# HTML 소스코드를 분석(파싱) 해서 원하는 정보만 쉽게 뽑아낼 수 있느 ㄴ객체로 만들어주는 함수
