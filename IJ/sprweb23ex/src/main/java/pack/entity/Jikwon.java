package pack.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Jikwon {
    @Id
    private int jikwonno;

    private String jikwonname;
    private String jikwonjik;
    private int jikwonpay;
    private String jikwonibsail;
    private String jikwongen;
    private String jikwonrating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "busernum")
    private Buser buser;
}
