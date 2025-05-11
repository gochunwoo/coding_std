#tuple(튜플)
#튜플은 불변성을가짐, 값변경x
#list와는 달리 대괄호가아닌 ( 소괄호 ) 사용해서 생성
days = ("Mon","Thu","Wd")
# 만들떄는 소괄호사용하지만 호출할떄는 [index] 사용
print(days[0])




















# list와 차이점은?
"""
수정가능: list가능 ,        tuple불가능
선언방식: list[대괄호]      tuple(소괄호)
용도: list(값변경이필요한경우),  tuple(고장값필요한경우)
메서드: list(많음)          tuple(거의 없음)

# 리스트
my_list = [1, 2, 3]
my_list[0] = 100     # ✅ 가능
print(my_list)       # [100, 2, 3]

# 튜플
my_tuple = (1, 2, 3)
my_tuple[0] = 100     # ❌ 오류 발생 (튜플은 값 변경 불가)

"""