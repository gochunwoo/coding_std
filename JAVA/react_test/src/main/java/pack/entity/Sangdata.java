package pack.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Sangdata {
    @Id
    private int code;      // 상품 코드 (PK)
    private String sang;   // 상품명
    private String su;     // 수량 (varchar, 실제론 int 권장)
    private String dan;    // 단가 (varchar, 실제론 int 권장)
}