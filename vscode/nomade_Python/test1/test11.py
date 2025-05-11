# And & Or
# input 는 하나의 입력을 받는 함수
# input() : 사용자로부터 입력을 받는 함수
#age = input("How old are tou?")
# 사용자가 입력한 값을 age 변수에 저장
# 즉 키보드로 값을 입력받고, 그 값을 문자열(str)형태로 반환(return)함
#print("user answer ", age)

# type() : 변수의 자료형을 확인하는 함수
#print(type(age))

'''
age = int(input("How old are you?"))

if age <18:
    print("you can't drink.")
elif age > 18 and age < 35: # age가 18보다 크고 35보다 작은지 확인
    print("You drink beer!")
else:
    print("Go ahead")
# 사용자 18입력 값: Go ahead
# 사용자 20입력 값: You drink beer!
# 사용자 17입력 값: you can't drink.
'''

'''
age = int(input("How old are you?"))

if age <18:
    print("you can't drink.")
elif age >= 18 and age <= 35: # age가 18이상이면서 35이하인지 확인
    print("You drink beer!")
else:
    print("Go ahead")
# 사용자 18입력 값: You drink beer!
# 사용자 20입력 값: You drink beer!
# 사용자 17입력 값: you can't drink.
'''

age = int(input("How old are you?"))

if age <18:
    print("you can't drink.")
elif age >= 18 and age <= 35: # age가 18이상이면서 35이하인지 확인
    print("You drink beer!")
elif age == 60 or age == 70: # age가 60이거나 70인지 확인
    print("Birthday party!")
else:
    print("Go ahead")

True and True = True
True and False = False
False and True = False
# and는 두 조건이 모두 True일때만 True
True or True = True
True or False = True
False or True = True
False or False = False
# or는 두 조건중 하나라도 True이면 True

# 정리
'''
1. input()함수
  - input()은 사용자(사람) 에게 키보드로 값을 입력받는함수
  - 이 함수는 사용자가 입력한 값을 문자열(string) 형태로 return 해줌
  - 즉 input()은 값을 보여주는게 아니라 값을 받아서 돌려주는함수

2. type()함수
  - type()은 변수의 자료형(데이터타입) 을 알려주는 함수
  - 예를 들어, 입력받은 값이 문자열인지 숫자인지를 확인할수있음

3. 숫자 처리하려면 int()로 변환
age = int(input("How old are you?"))  # 문자열을 정수(int)로 변환
print(age + 1)  # 예: 20 입력 시 21 출력

4.조건문 + and & or
and : 두 조건이 모두 참(True) 이어야 전체가 참이 됨
or : 두 조건중 하나라도 참(True) 이면 전체가 참이 됨
'''