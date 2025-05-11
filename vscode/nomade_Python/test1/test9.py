'''

my_name = "chunwoo"
my_age = 26
my_color_eyes = "brown"

문자열안에 변수 사용: 
f 와 쌍따움표, 그리고 텍스트 그리고 변수를 넣고싶은곳에는 {변수}

print(f"Hello i'm {my_name}, I have {my_age} years old, and my eye color is, {my_color_eyes} thank you")
'''

# 과일 이름을 받아서 "juice" 문자열을 붙여 반환
def make_juice(fruit):
    return f"{fruit}+juice"

# 주스를 받아서 "ice" 문자열을 붙여 반환
def add_ice(juice):
    return f"{juice}+ice"

# 얼음이 들어간 주스를 받아서 "sugar" 문자열을 붙여 반환
def add_suger(iced_juice):
    return f"{iced_juice}+suger"

# 1단계: make_juice 실행 → "apple+juice" 결과 반환
juice = make_juice("apple")

# 2단계: add_ice 실행 → "apple+juice+ice" 결과 반환
cold_juice = add_ice(juice)

# 3단계: add_suger 실행 → "apple+juice+ice+suger" 결과 반환
perfect_juice = add_suger(cold_juice)

# 최종 결과 출력
print(perfect_juice)  # 출력: apple+juice+ice+suger

# return: 함수 밖으로 값을 돌려줌
# 변수저장: return된 값을 변수에 저장
# 흐름: 값이 단계별로 계속 이어지고, 다음함수의 입력이 됨

# return 없이 print를 사용하면
'''
결과값: 
apple+juice
None+ice
None+sugar
None
함수안에서 print()만 사용하면 값을 화면에 보여주기만하고
밖으로 전달(return)하지 않음
그래서 juice = make_juice("apple")의 결과는 None이 됨
print()는 그냥 "찍기만 하는것"
return은 "값을 돌려주는것"
'''