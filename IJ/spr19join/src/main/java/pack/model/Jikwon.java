package pack.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="jikwon")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Jikwon {
    @Id
    private int jikwonno;

    private String jikwonname;
    private String jikwonjik;
    private int jikwonpay;
    
    
    // jikwon 엔티티 는 buser 엔티티와 다대1 관계
    // 연관관계 필드
    @ManyToOne
    @JoinColumn(name = "busernum")// 외래키로 조인 (연관 관계의 주인)
    private Buser buser;    // Jikwon 에 속한 이 필드는 Buser 엔티티를 참조하기 때문에 Buser 객체에 접근 가능
}
