class Dog: # 부모 클래스 Dog 정의함
    def __init__(self, name, breed, age):
        self.name = name
        self.age = age
        self.breed = breed
        # 생성자__init__: 이름,나이,품종 받아서 self에 저장

    def introduce(self): # 소개글
        print(f"i am {self.name} and i am {self.age} years old")

    def sleep(self): # 잠자기
        print("zzzzzz")

''' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ'''
class GuardDog(Dog): # 자식클래스 Dog의 기능을 그대로 물려받음
    def __init__(self, name, breed):
        super().__init__(name, breed, 20)
        # super().__init__()을 사용해서 Dog의 생성자 호출
        # 나이를 20으로 고정해서 생성

    def rrrrr(self): # GuardDog만의 기능 → 으르렁
        print("stay away!")

    def introduce(self): #오버라이딩(부모메서드를 자식이 다시정의)
        self.rrrrr() # 같은 클래스의 메서드 호출
        super().introduce() # Dog의 introduce() 호출함
        print(f"i am a grumpy {self.breed}")

''' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ'''
class Puppy(Dog):  
    # 상속: Puppy는 Dog의 모든 속성과 메서드를 상속받는다
    def __init__(self, name, breed):
        # super()는 부모 클래스인 Dog의 생성자를 호출함
        # 나이를 항상 0.1로 고정
        super().__init__(name, breed, 0.1)

    def __str__(self):
        # __str__ 메서드를 오버라이딩 → print(객체) 시 이 문자열이 출력됨
        return f"{self.breed} puppy is {self.name} and {self.age} years old\n"

    def woof_woof(self):
        # Puppy 클래스만의 고유 메서드 (짖기 기능)
        print("Woof woof!")

    def introduce(self):
        # introduce 메서드를 오버라이딩 (부모 Dog의 메서드를 재정의)
        self.woof_woof()           # 자기 클래스 메서드 호출
        super().introduce()        # 부모 클래스(Dog)의 introduce 호출
        print(f"i am a baby {self.breed}")  # 추가 출력

# Puppy 클래스 객체 생성
# → Puppy의 __init__ → Dog의 __init__ 호출됨
# → age는 0.1로 고정됨
ruffus = Puppy(
    name="Ruffus",
    breed="Poodle"
)

bibi = Puppy(
    name="Bibi",
    breed="Beagle"
) 

# Puppy introduce() 호출
# → woof_woof() → Dog.introduce() → "i am a baby ..."
ruffus.introduce()

# GuardDog 클래스 객체 생성
# → GuardDog의 __init__ → Dog의 __init__ 호출됨
# → age는 20으로 고정됨
Bond = GuardDog(
    name="Bond",
    breed="Dalmatian"
)

# GuardDog introduce() 호출
# → rrrrr() → Dog.introduce() → "i am a grumpy ..."
Bond.introduce()


# Dog 클래스의 sleep() 호출 (상속받은 기능)
Bond.sleep()