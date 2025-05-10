package pack.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@Entity
@Table(name="jikwon")
@AllArgsConstructor
@NoArgsConstructor
public class Jikwon {
    @Id
    private int jikwonno;
    private String jikwonname;
    private String jikwonjik;
    private int jikwonpay;

    @ManyToOne
    @JoinColumn(name="busernum") // 외래키로조인
    private Buser buser;    // jikwon에 속한 필드
}
