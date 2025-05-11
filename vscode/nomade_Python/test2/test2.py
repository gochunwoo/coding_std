days_of_week = ["m","t","w","t","f",True,False,[1,2,3,4]]
#print(days_of_week.count("w"))
#days_of_week.clear() #청소 지움
days_of_week.append("s")#추가
print(days_of_week)
days_of_week.append("S")
print(days_of_week)
days_of_week.remove("w")#삭제
print(days_of_week)
print(days_of_week[1])
print(days_of_week[6])
#배열안에 있는 index시작은 0
#list안에 문자열 숫자 boolean너을수는 잇지만 유지보수x 가독성x
#메소드는 데이터타입뒤에 점. 찍고 사용가능 단독으로는 사용못함
