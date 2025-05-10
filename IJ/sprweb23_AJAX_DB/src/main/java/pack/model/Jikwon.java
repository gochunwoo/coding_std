package pack.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table( name = "jikwon") // 가독성울 위해 작성
@Entity
public class Jikwon {
    @Id
    private int jikwonno;

    private String jikwonname;
    private String jikwonjik;

    @Column(name="busernum")
    private String buser;
}
