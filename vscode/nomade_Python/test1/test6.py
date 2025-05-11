# 함수 정의: say_hello는 이름과 나이를 받을 수 있도록 2개의 parameter(매개변수)를 가짐
# user_name: 사용자 이름을 받을 변수
# user_age: 사용자 나이를 받을 변수
def say_hello(user_name, user_age):
    print("hello", user_name)  # 사용자 이름 출력
    print("your age is", user_age, "years old")  # 사용자 나이 출력

# 함수 호출: say_hello에 2개의 argument(인자)를 전달해야 함
# "chunwoo"는 user_name에 전달되고, 26은 user_age에 전달됨
say_hello("chunwoo", 26)

# 일반적인 출력
print("hello world")


# 정리
# 1. 함수에 parameter가 여러 개 있을 땐 ,(콤마)로 구분해서 작성
#    예) def 함수이름(param1, param2):
# 2. 함수 호출할 때는 parameter 개수만큼 argument(값)를 순서대로 전달해야 함
#    예) 함수이름(arg1, arg2)
# 3. 순서가 중요함! 첫 번째 인자는 첫 번째 매개변수로, 두 번째 인자는 두 번째 매개변수로 전달됨
