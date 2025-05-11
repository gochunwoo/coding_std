if 10 > 5: # 실행됨
    print("correct!")

if 10 < 5: # 실행안됨
    print("correct!")

if 10 == 5: # 실행안됨
    print("correct!")

if 10 != 5: # 실행됨
    print("correct!")

if 10 >= 5: # 실행됨
    print("correct!")

if 10 <= 5: # 실행안됨
    print("correct!")
# ==: 같다
# if문은 조건이 맞으면 실행됨

password_correct = True
if password_correct:  # 조건이 맞으면 실행
    print("Here is tour money")
else:   #  조건이 맞지않으면 실행
    print("Sorry, you are not allowed to enter")
# 조건이 True이므로 if문이 실행됨

password_correct = False
if password_correct:  # 조건이 맞으면 실행
    print("Here is tour money")
else:   #  조건이 맞지않으면 실행
    print("Sorry, you are not allowed to enter")
# 조건이 False이므로 else문이 실행됨

winner = 10

if winner > 10:  # 파이썬은 if부터 읽음 조건 틀리면 다음실행
    print("winner is greater than 10")
elif winner < 10: # 위 조건이 맞지않으므로 두번쨰 조건 확인 x다음실행
    print("winner is less than 10")
else: # if도 false, elif도 false이므로 else문 실행
    print("winner is 10")
# 값: winner가 10이므로 else문이 실행됨

winner = 20

if winner > 10: # 조건이 맞으므로 if문 실행 그리고 프로그램 종료
    print("winner is greater than 10")
elif winner < 10: 
    print("winner is less than 10")
else: 
    print("winner is 10")
# 값: winner is greater than 10
# if문이 true이므로 파이썬은 나머지 조건 확인하지 않고 종료
# if문은 조건이 맞으면 실행되고, 맞지않으면 다음 조건 확인

winner = 5

if winner > 10: # false이므로 다음 조건 확인
    print("winner is greater than 10")
elif winner < 10: # true이므로 elif문 실행
    print("winner is less than 10")
else: 
    print("winner is 10")

# 연산자: +, -, *, /, //, %, **
# 여러가지 연산자 사용해서 조건문 사용가능

if winner != 10: 
    print("winner is not 10")
elif winner == 10:
    print("winner is 10")

if winner == 10:
    print("winner is 10")
elif winner != 10:
    print("winner is not 10")
elif winner > 10:
    print("winner is greater than 10")
elif winner < 10:
    print("winner is less than 10")
# elif는 여러개 사용가능
# if문은 조건이 맞으면 실행되고, 맞지않으면 다음 조건 확인
# 어떤 한 조건이 true가 되는 순간, Python은 즉시 그 안쪽 코드를 실행하고, 나머지는 확인하지 않음

'''
조건문의 기본 구조

if 조건1:
    # 조건1이 True면 실행됨, 여기서 끝남
elif 조건2:
    # 조건1이 False고, 조건2가 True면 실행
else:
    # 위 조건들 모두 False일 때 실행

'''