# dictionary(딕셔너리) 데이터 구조
player = {
    'name' : 'chunwoo',
    'age' : 12,
    'alive' : True,
    'fav_food' : ["🍕","🍔"]
}
# player라는 dictionary 안에 name,age,alive 속성만듬
#print(player)
# 파이썬의 데이터구조, 즉 데이터는 메소드라는걸 가짐
# dictionary에서는 키-값 쌍으로 이뤄져있어 키(age), 값(12) 가짐
#print(player.get('age')) #값 12
# print(player[0]) -> list는 [index] 호출
#print(player.get('fav_food'))
# dictionary의 용도와 리스트의 용도는 완전다름
# 딕셔너리는 많은 속성들의 데이터를 만들때 사용

"""print(player)
print(player.pop('age')) # age값-키 삭제
print(player)"""

print(player)
player['xp'] = 1500 #데이터 추가하기
player['fav_food'].append("🍜") # list에 자료추가하기 
print(player)

"""
정리
딕셔너리는 key(키) : value(값) 쌍으로 구성된 데이터구조
중괄호 { } 사용
파이썬은 위에서부터 아래로 코드읽음 순서를 기억함

player['name'] 키로 값 접근함
player.get('age') 값가져오기
player['xp'] = 1500 새로운데이터 추가
player.pop('age')	키-값 제거

player['fav_food'].append("🍜")	
리스트 안에 값 추가 (리스트와 함께 사용 가능)

딕셔너리는 이름표(key)를 붙여서 다양한 속성의 데이터를 한 번에 다루는 자료 구조!
"""