websites = ( #tuple 변경되지않는값
    "google.com",
    "airbnb.com",
    "twitter.com",
    "facebook.com",
    "tiktok.com"
)

# 이코드는 tuple 안에 있는 각각의 item으로 코드실행
# list 도 똑같이 실행됨
for each in websites:
    print("hello") # hello * 5실행됨

# for반복문을 사용할때 각각의 item이 실행될때 placeholder를 만드는것을 허락해줌 
# placeholder의 이름은 원하는대로 정할수 있음

# for potato in websites:
for website in websites: # placeholder의 이름은 이렇게더많이 선호함
    print("potato is equals to", website)
# 값 website is equals to google.com
# 값 website is equals to airbnb.com, tw....등등 ~ tiktok.com

# 어떤집합체가 있어도 이제 이렇게 코드를 실행할 수 있음
# 현재 처리중인 item에도 접근이 가능함

"""
정리
for 반복문이란?
리스트,튜플,문자열 등 반복 가능한 집합(iterable)을 하나씩 꺼내면서 코드를 반복 실행하는 구조

기본구조
    for 임시변수 in 집합:
        반복할 코드
임시변수는 각 item(요소)을 하나씩 꺼내 저장할공간 (placeholder)
집합은 list, tuple,String 등 여러 값이 들어있는 데이터

for (집합의 요소를 반복하는 문법)
tule (값이 고정된 집합, 수정불가)
list (값변경가능. 순서있음)
placeholder (반복문 안에서 하나씩 꺼내 저장하는 변수)
순서 위에서부터 하나씩 꺼냄(자동으로 index 0부터)

요약 : for 변수 in 집합: 구조를 통해, 리스트나 튜플 안의 값을 하나씩 꺼내면서 반복 실행할 수 있다.

"""


