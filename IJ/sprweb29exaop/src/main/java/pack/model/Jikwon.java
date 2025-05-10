package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;

@Getter
@Entity
public class Jikwon {
    @Id
    private int jikwonno;

    private String jikwonname;
    private String jikwonjik;
    private String jikwongen;

    @ManyToOne
    @JoinColumn(name = "busernum")
    private Buser Buser;
}
