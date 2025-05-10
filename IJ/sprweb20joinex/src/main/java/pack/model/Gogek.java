package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Gogek {
    @Id
    private int gogekno;
    private String gogekname;
    private String gogektel;
    private String gogekjumin;

    @ManyToOne
    @JoinColumn(name = "gogekdamsano", insertable = false, updatable = false)
    private Jikwon jikwon;
    // insertable = false, updatable = false : 참조용으로만 사용

    // 원래는 dto에서 처리
    public String getGender() {
        if (gogekjumin == null || gogekjumin.length() < 7) return "알수없음";
        return (gogekjumin.charAt(6) % 2 == 1) ? "남자" : "여자";
    }
    // dto에서 처리해야됨
    public int getAge() {
        if (gogekjumin == null || gogekjumin.length() < 7) return 0;
        int year = Integer.parseInt(gogekjumin.substring(0, 2));
        int prefix = (gogekjumin.charAt(6) < '3') ? 1900 : 2000;
        int birthYear = prefix + year;
        return java.time.Year.now().getValue() - birthYear + 1;
    }
}
