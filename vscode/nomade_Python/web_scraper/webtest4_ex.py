'''
1. 웹 크롤링(Web Crawling)이란?
인터넷 웹페이지에서 필요한 데이터를 자동으로 추출하는 기술
코롤링 도구를 통해 HTML 문서를 가져오고, 원하는 정보를 찾아내는 방식

2. 주요 사용 라이브러리
-- cloudscraper
Cloudflare가 적용된 사이트도 우회해서 접속할수 있게해줌
requests보다 강력하게 보호된 사이트도 크롤링 가능.

-- BeautifulSoup
HTML 구조를 파이썬 객체처럼 탐색할 수 있게 도와주는 파서(parser).
html.parser, lxml, html5lib 중 하나를 선택해 사용 가능.

3.주요 코드 구조 요약
import cloudscraper
from bs4 import BeautifulSoup
웹 요청 및 HTML 파싱용 라이브러리 불러오기

scraper = cloudscraper.create_scraper()
-> cloudscraper 객체를 생성해서 웹페이지 요청에 사용할 준비

reponse = scraper.get(url)
soup = BeautifulSoup(reponse.text, "html.parser")
-> 사이트에 요청을 보내고 응답받은 HTML을 파싱

jobs = soup.find("section", class_"jobs").find_all("li")[1:-1]
find() -> 해당 태그중 첫번째 하나만 찾음
find()_all() -> 해당 조건에 맞는 모든 태그를 리스트로 반환
[1: -1] -> 광
'''