package pack.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "busernum")
    private Buser buser;

    @OneToMany(mappedBy = "jikwon")
    private List<Gogek> gogeks;

}
