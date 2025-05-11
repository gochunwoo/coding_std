# from random import randint
# randint(a, b)는 실제로는 내부에서
# randrange(a, b+1) 을 대신 사용하고 있다는뜻

# 즉 randint(1, 50)
# -> 실제로는 randrange(1, 51)과 같은 의미
# -> 그래서 1이상 50이하의 정수가 나옴

"""
randint(a(1), b(50)) 정의함 , 냅부적으론 1, 51임
Return a random integer N such that a <= N <= b. Alias for randrange(a, b+1).
공식문서의 뜻은 N이라는 숫자를 반환하는데, a <= N <= b를 만족해야 한다 라고 말을함 우리코드로 보면

1 <= N <= 50
내부적으로는 randrange(1,51)처럼 작동
즉 컴퓨터가 1이상 51미만 -> 1부터 50까지 정수중에서 무작위로(N) 선택
"""

"""user_choice = int(input("Choose number : "))
pc_choice = randint(1,50)

if user_choice == pc_choice:
    print("you won!")
elif user_choice > pc_choice:
    print("Lower! Computer chose", pc_choice)
elif user_choice < pc_choice:
    print("Higher! Computer chose", pc_choice)"""

"""while True:  # 무한루프 안멈춤
    print("Hi im True")
while False:  # 무한루프 멈출려면 False: 만나야됨
    print("Hi im False")"""

distance =0

while distance < 20:
    print("I'm running: ", distance, "km")
    distance = distance + 2 # 0 + 2 증가하면서 20을만나면 종료

