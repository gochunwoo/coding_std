package pack.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Gogek {
    @Id
    private int gogekno;
    private String gogekname;
    private String gogektel;
    private String gogekjumin;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gogekdamsano")
    private Jikwon jikwon;
}
