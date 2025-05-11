"""
user_choice = int(input("Choose number"))
pc_choice = 50

if user_choice == pc_choice: #입력값이 50와 같은지 확인
    print("you won!")
elif user_choice > pc_choice: #입력값이 50보다 큰지 확인
    print("Lower!")
elif user_choice < pc_choice: #입력값이 50보다 작은지 확인
    print("Higher!")
"""

'''
파이썬 표준 라이브러리
파이썬 언어 레퍼런스는 파이썬 언어의 정확한 문법과 의미를 설명하고 있지만, 이 라이브러리 레퍼런스 설명서는 파이썬과 함께 배포되는 표준 라이브러리를 설명합니다.
https://docs.python.org/ko/3/library/index.html

내장 함수
파이썬 인터프리터에는 항상 사용할 수 있는 많은 함수와 형이 내장되어 있습니다.
ex: input, int, print 등등
https://docs.python.org/ko/3/library/functions.html
'''

from random import randint
# . import random 전체 모듈을 불러옴
# from random import randint	randint 함수만 따로 불러옴
# from random import *	모듈 안 모든 함수 전부 불러옴 (비추)

# 임의의 정수 N을 a <= N <= b가 되도록 반환하십시오. randrange(a, b+1)의 별칭.
# https://docs.python.org/ko/3/library/random.html#random.randint
# random module은 Python Standard Library에 포함되어있지만
# random module을 사용하기 위해 import해야함

user_choice = int(input("Choose number"))
pc_choice = randint(1, 50)

if user_choice == pc_choice: #입력값이 50와 같은지 확인
    print("you won!")
elif user_choice > pc_choice: #입력값이 50보다 큰지 확인
    print("Lower! Computer chose", pc_choice)
elif user_choice < pc_choice: #입력값이 50보다 작은지 확인
    print("Higher! Computer chose", pc_choice)
# 첫번째 파라미터 a는 N보다 작거나 같고, 
# N은 두번째 파라미터 b보다 작거나 같다 



"""
random 모듈이란?
파이썬의 random 모듈은 무작위(랜덤) 값을 만들 떄 사용하는 표준라이브러리
즉, 숫자,순서,선택,섞기 등을 랜덤으로 처리할수 있게 도와주는도구
"다양한 확률 분포를 위한 의사  난수(pseudo-random) 생성기를 구현한 모듈이다"

왜 의사(pseudo) 난수인가?
random 모듈이 만드는 값은 진짜 무작위(random) 가 아님
내부적으로 시드(seed) 값에 따라 결정되는 예측 가능한 알고리즘 기반난수
하지만 사람눈에는 무작위 처럼 보여서 일반적인 용도로 충반함

random() : 0.0 이상 1.0 미만의 소수(float) 반환 0.72148
randint(a, b) : a 이상 b 이하의 정수(int) 하나 반환
uniform(a, b) : a 이상 b 이하의 실수(float) 하나 반환환
"""