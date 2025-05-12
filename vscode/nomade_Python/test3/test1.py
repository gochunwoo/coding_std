websites = ( #tuple 변경되지않는값
    "google.com",
    "airbnb.com",
    "https://twitter.com",
    "facebook.com",
    "https://tiktok.com"
)

for website in websites:
    #if 는 True인지 False 인지 판단
    # startwith("") 어떤걸로 시작하는 지물어보고
    # not 은 http://로 시작하지 않으면 True며 실행됨
    # startswith() 메소드는 True 또는 False를 return함
    if not website.startswith ("https://"):
       website = f"https://{website}"
    print(website)


'''
정리:

for website in websits 는 
튜플안의 주소들을 하나씩 꺼내서 website라는 변수에 담음

if not website.startswith("https://"): 는
website가 https...로 시작하지 않는다면
startswith()는 문자열이 특정 글자로 시작하는 지확인하는함수
결과는 True 또는 False
not을 붙이면 그반대 -> 즉 https...로 시작하지 않으면 True
website = f"https://{website}" 는
https://가 붙어있지 않은 주소에 https:// 앞에 붙여서 수정


최종적으로 용어 한번더 정리
tuple : 고정된 데이터 집합 (수정 불가, 반복 가능)
for : 집합을 반복하면서 하나씩 꺼내 사용
if not : 조건이 거짓일 떄 실행 (반대조건)
startswith() : 문자열이 특정 문자로 시작하는지 검사(T ,F)
f-string 문자열 안에 변수를 넣을떄 사용(f"{변수}")
'''