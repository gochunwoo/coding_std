#def say_hello():
#    print("hello how r u?")

#say_hello("cunwoo") #현재 출력은 안됨

# function 을 만들때는 데이터가 들어가는 플레이스홀더 같은 공간을 제공해야됨
def say_hello(user_name):
    print("hello", user_name, "how r u?")
    # user_name은 function안에서만 사용가능한 변수

say_hello("chunwoo") #hello chunwoo how r u?
say_hello("sangwoo") #hello sangwoo how r u?
say_hello("mercioo") #hello mercioo how r u?
#재사용도 가능함
# user_name, 즉 플레이스홀더는 parameter이고
# 실제로 전달한 데이터는 argument라고 함
# print 안에서는 , (콤마) 도 사용가능함


# 전체 정리 

# 함수 정의: say_hello라는 이름의 함수를 만들고, user_name이라는 데이터를 받을 준비를 함
def say_hello(user_name):  # user_name은 매개변수(parameter)라고 부름
    print("hello", user_name, "how r u?")  # 콤마(,)로 여러 데이터를 출력 가능

    # user_name은 함수 안에서만 사용할 수 있는 지역 변수임

# 함수 호출: say_hello 함수에 "chunwoo"라는 실제 데이터를 넣어 실행
say_hello("chunwoo")  # 출력: hello chunwoo how r u?

# 함수 호출: 다른 이름으로도 반복해서 사용 가능 (재사용 가능)
say_hello("sangwoo")  # 출력: hello sangwoo how r u?
say_hello("mercioo")  # 출력: hello mercioo how r u?

# 정리:
# 1. user_name은 함수 정의에서 사용하는 변수로 "매개변수(parameter)"라고 부름
# 2. say_hello("chunwoo")에서 "chunwoo"는 실제 전달하는 값으로 "인자(argument)"라고 부름
# 3. 함수는 재사용 가능하며, 다양한 입력을 받아 출력 결과를 바꿀 수 있음
