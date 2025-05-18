from playwright.sync_api import sync_playwright
# Playwright 라이브러리를 불러오는 코드

p = sync_playwright().start()
# sync_playwright() -> Playwright 실행환경을 준비해주는 함수(런타임 진입점,context manager)
# .start(): 동기 방식으로 playwright의 런타임을 실제로 시작(초기화)하는 메소드
# 이줄이 실행되어야 크롬 등 브라우저를 자동으로 자작할 수 있음

browser = p.chromium.launch(headless=False)
# p.chromium: Playwright에서 크롬 브라우저를 사용하겟다는뜻
# .launch: 새 브라우저 인스턴스를 시작하는 메서드(=실행)
# headless=False: "헤드리스(headless, 창없는)" 모드가 아님 = 실제 창이 뜬다
# 자동화 테스트 할떄는 True가 기본이지만, 개발.디버깅에는 False가 유리

page = browser.new_page()
# browser: Chromium 브라우저 인스턴스(위에서 생성).
# new_page(): 새 브라우저 탭 또는 페이지(=탭)를 만드는 메서드.
# Playwright는 여러 페이지(탭)에서 동시 작업 가능.

page.goto("https://google.com")
# page: 방금 만든 브라우저 탭(페이지) 객체.
# goto(): 지정한 URL로 이동하는 메서드(HTTP GET 요청 발생).

page.screenshot(path="screenshot.png")
# 현재 브라우저 페이지 전체를 PNG 이미지로 캡처하는 메서드.
# path 파라미터: 저장될 파일 경로 및 이름 지정.
