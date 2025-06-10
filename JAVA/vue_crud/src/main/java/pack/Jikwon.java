package pack;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Jikwon {
    @Id
    private int jikwonno;

    private String jikwonname;

    @ManyToOne
    @JoinColumn(name="busernum")
    private Buser buser;

    private String jikwonjik;
    private int jikwonpay;
    private Date jikwonibsail;
    private String jikwongen;
    private String jikwonrating;

    @OneToMany(mappedBy = "jikwon", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Gogek> gogeks;
}
