"""class Puppy:
    pass
ruffus = Puppy()
print(ruffus)"""

# <__main__.Puppy object at 0x00000222DDD46660>
# <모듈이름.클래스이름 object at 메모리주소>
# object : 객체라는 뜻. 클래스에서 만들어진 실체
# oxoo.... 메모리 주소 16진수(0x)로 표현됨

# method는 class안에 있는 함수
# 함수를 만들고 그함수를 class안에 넣기만 하면 그게메소드
# 함수가 class 바깥에 있으면 함수인거고 안에있으면 메소드임

'''class Puppy:
    def __init__():
        print("Puppy is born!")
ruffus = Puppy()
print(ruffus)'''

# TypeError: 
# Puppy.__init__() takes 0 positional arguments but 1 was given
'''
 해당 에러는 함수가 인자를 안받는다고 되어있는데, 실제로는 자동으로1개의 인자(self)가 전달되었기 때문에 생긴에러

이유설명
파이썬 클래스에서는 메서드 규칙이있음

seif는 필수
- self는 객체 자신을 가리키는 예약어
- 메서드(함수)가 객체 안에 있는 속성에 접근할 수 있게해줌

--init__() 은 생성자(Constructor)
- 객체가 생성될 때 자동으로 호출됨
- 객체의 초기 설정을 할 때 사용함함
'''
class Puppy:

    def __init__(self):
        self.name = "Ruffus" # 속성 정의
        self.age = 0.1
        self.breed = "Beagle"
        #print(potato)
        #print("Puppy is born!")

ruffus = Puppy()
#puppy() 클래스를 바탕으로 객체 ruffus를 생성
# 이순간 __init__()이 실행됨 -> 위의 세속성이 자동으로 초기화
print(ruffus.name, ruffus.age, ruffus.breed) # Ruffus 0.1 Beagle
# ruffus 객체에 저장된 name, age, breed를 출력
# <__main__.Puppy object at 0x00000185835C6660>
# Puppy is born!
#print(ruffus)
#<__main__.Puppy object at 0x000001D6964F6660>
#Puppy is born!
#<__main__.Puppy object at 0x000001D6964F6660>

# puppy라는 class에 있는 모든 메소드는 자기자신에 대한 참조받음
# 첫번째 아규미터로 자신을 참조함