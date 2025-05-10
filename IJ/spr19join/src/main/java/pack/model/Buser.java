package pack.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name="buser")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Buser {
    @Id
    private int buserno;

    private String busername;
    private String buserloc;
    private String busertel;

    @OneToMany(mappedBy = "buser", fetch = FetchType.LAZY) // Jikwon 엔티티의 buser 필드를 기준으로 매핑관계가 됨을 나타냄
    // mappedBy = "buser" 는 주인이 아님을  나타냄. 즉, 연간관계 주인은 jikwon 엔티티가 된다.
    private List<Jikwon> jikwonList; // Jikwon 엔티티들의 리스트

}
