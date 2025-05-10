package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "jikwon")
@Data
public class Jikwon {
    @Id
    private int jikwonno;
    private String jikwonname;
    private int busernum;
    private String jikwonjik;
    private int jikwonpay;
    private String jikwonibsail;
    private String jikwongen;
}
