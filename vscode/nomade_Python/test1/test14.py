from random import randint

print("Welcome to Python Casino")
pc_choice = randint(1, 100)  # N이 1과 50사이에서 숫자선택

playing = True

while playing: # while은 여기 조건문 부분이 True일때만 동작함
    user_choice = int(input("Choose number(1 ~ 100): ")) # 사용자 값 입력
    if user_choice == pc_choice: # 사용자값 == N값이 동일한경우 실행
        print("You won!")
        playing = False  # while는 False를 만나야 멈춤
    elif user_choice > pc_choice: # 사용자값이 더 높은경우 실행 
        print("Lower!")
    elif user_choice < pc_choice: # N값이 사용자값보다 높은경우 실행
        print("Higher!")

    """
    정리:
    while문이란?
    조건이 참(True)인 동안 게속 반복해서 실해오디는 반복문
    조건이 False가 되면 반복을 멈춘다

playing = True
while playing:
    # 이 안의 코드는 playing이 True일 때 반복 실행됨
    ...
    if 정답 맞춤:
        playing = False  ← 조건이 False가 되어 while 종료
    """