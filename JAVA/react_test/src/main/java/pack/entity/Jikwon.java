package pack.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Jikwon {
    @Id
    private int jikwonno;          // 사원 번호 (PK)
    private String jikwonname;     // 이름
    private int busernum;          // 부서번호 (FK)
    private String jikwonjik;      // 직급
    private int jikwonpay;         // 급여
    private String jikwonibsail;   // 입사일(문자열)
    private String jikwongen;      // 성별
    private String jikwonrating;   // 등급
}
// → DB의 jikwon 테이블과 1:1로 매핑됨 (JPA)
