package pack.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Gogek {
    @Id
    private int gogekno;         // 고객 번호 (PK)
    private String gogekname;    // 고객 이름
    private String gogektel;     // 전화번호
    private String gogekjumin;   // 주민등록번호
    private int gogekdamsano;    // 담당 사원 번호 (FK)
}