'''
# function 
# python function 함수는 호출될때만 실행되는 코드블록입니다.
# 매개변수라고 하는 데이터를 함수에 전달할 수 있습니다.
# 함수는 결과로 데이터를 반환할 수 있음
def say_hello():
    print("hello how r u?")
    # 파이썬에서는 def 키워드를 사용하여 함수를 정의함 현재 출력x

# functon 사용
say_hello() # say_hello() # 함수 호출
# def 라는 키워드를 사용하여 함수를 정의함
# function이 정의된 후에 fuction의 괄호를 사용하여 호출함
# say_hello() ( )호출
'''

# 에러 발생
# 파이썬에서 빈 공백은 코드에 영향을 끼침
# def say_hello():
# say_hello안에 function안에 있다고 알려주고싶을떈
# 탭을 사용해서 들여쓰거나 스페이스바두번사용해서 들여쓰기
# 파이썬에는 코드를 두칸 들여써줘야 함수안에 있다고 알려줌
def say_hello():
  print("hello how r u?") 

def say_bye():
  print("bye bye")

  say_hello() # 이렇게 하면 say_hello()는 say_bye의 안에 있음
  # 공백2개가 들어갔기때문에 say_byy안에 있음..

say_hello() # say_hello()는 say_bye의 안에 있지않음 -> 현재