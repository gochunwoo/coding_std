#get 가져옴 pip install requests 터미널에 입력
# pypi.org 에서 패키지 가져옴
from requests import get


websites = ( #tuple 변경되지않는값
    "google.com",
    "airbnb.com",
    "https://naver.com",
    "facebook.com",
    "https://tiktok.com"
)

results ={
   # 빈 딕셔너리(dictionary) 를 만드는 코드 즉 result라는 변수 안에 
   # 아무것도 없는 딕셔너리를 넣은것것
   # 이코드는 여기서 웹사이트들을 돌면서 get() 요청을 보내고
   # 그결과 (성공인지, 실패인지)를 results 딕셔너리에 저장할려고함
   # 예를 들어 google.com 이성공하면
   # results["https://google.com"] = "OK" 이런식으로 저장
   # 성공하면 저장 눈이보이지 않을뿐 내부적으론 이런코드가있음
  #'https://google.com': 'OK',
  #'https://airbnb.com': 'OK',
  #'https://facebook.com': 'OK',
  #'https://naver.com': 'OK',
  #'https://tiktok.com': 'OK',
  # 마지막엔 print(results)
}

for website in websites:
    if not website.startswith ("https://"):
       website = f"https://{website}"
    response = get(website)
    # print(response.status_code)
    if response.status_code == 200:
        results[website] ="OK"
    else:
        results[website] ="FatilED"

print(results)

# 출력 <response [200]>
# 요청이 성공적으로 되었습니다 성공의 의미는 HTTP메소드에 따라 달라집니다
# GET:리소스를 불러와서 메시지 바디에 전송되었습니다
# HEAD: 개체 해더가 메시지 바디에 있습니다
# PUT 또는 POST: 수행 결과에 대한 리소스가 메세지 바디에 전송됨
# TRACE: 메시지 바디는 서버에서 수신한 요청 메시지를 포함하고 있음

'''
HTTP 응답 상태 코드는 특정 HTTP 요청이 성공적으로 완료되었는지 알려줍니다.
응답은 5개의 그룹으로 나누어집니다.

1. 정보를 제공하는 응답 (100번대)
2. 성공적인 응답 (200번대)
- 200 OK: 요청이 성공적으로 되었습니다.
3. 리다이렉트 (300번대)
4. 클라이언트 에러 (400번대)
- 404 Not Found: 서버는 요청받은 리소스를 찾을 수 없습니다.
5. 서버 에러 (500번대)
'''
'''
HTTP Status 코드 Mdn 문서
https://developer.mozilla.org/ko/docs/Web/HTTP/Status

'''










# Requests
# from random import randint 파이썬라이브러리 임포트

"""
request란?
requests는 파이썬에서 HTTP 요청을 간단하게 처리할 수 있도록 도와주는 외부 라이브러리
GET, POST 같은 요청을 쉽게 보낼 수 있고, API와 통신하거나 웹 페이지 데이터를 수집할 때 자주 사용
복잡한 소켓 코드 없이도 직관적인 문법으로 웹 서버와 데이터를 주고받을 수 있다는 게 장점입

request : 요청(내가 서버에게 이정보줘 라고말하는것)
response : 응답(서버가 여기있어라는거)

requsets는 기본내장 모듈은 아님 따로 설치해야함
"""