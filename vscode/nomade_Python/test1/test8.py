# 함수 정의: 세금을 계산하는 함수
# money(돈)를 받아서 세율 35%를 곱한 값을 반환(return)함
def tax_calc(money):
    return money * 0.35  # 값을 밖으로 돌려줌(return). print는 하지 않음.

# 함수 정의: 받은 세금 값을 출력해주는 함수
def pay_tax(tax):
    print("thank you for paying", tax)  # 전달받은 세금값 출력

# tax_calc(150000000)의 결과(=세금)를 to_pay에 저장
to_pay = tax_calc(150000000)  # to_pay는 0.35 * 150000000 결과값을 저장함

# 저장한 값을 pay_tax에 전달해서 출력
pay_tax(to_pay)  # thank you for paying 52500000.0

# 위 두 줄을 한 줄로 줄이면 이렇게 가능함:
pay_tax(tax_calc(150000000))  # 결과는 똑같음

# ruturn : 값을 함수 밖으로 내보내는 키워드, print처럼 화면에 보여주는게 아님

#print() : 단순히 출력만 함, 값을 저장하거나 재사용 못함.

# 저장사용 : x = 함수() 처럼 변수에 담으면 return한 값을 재사용가능

# 중첩사용 : 함수(다른함수()) 처럼 안쪽 return값을 바로 바깥 함수로 전달가능능