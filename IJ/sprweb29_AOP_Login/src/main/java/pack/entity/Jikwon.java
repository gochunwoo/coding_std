package pack.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "jikwon")
public class Jikwon {
    @Id
    private int jikwonno;

    private String jikwonname;
    private String jikwonjik;
    private String jikwongen;

    @ManyToOne(targetEntity = Buser.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "busernum")
    private Buser buser;
}
