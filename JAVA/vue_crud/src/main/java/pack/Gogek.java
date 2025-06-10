package pack;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Gogek {
    @Id
    private int gogekno;

    private String gogekname;
    private String gogektel;
    private String gogekjumin;

    @ManyToOne
    @JoinColumn(name = "gogekdamsano")
    @JsonBackReference // 객체 간의 양방향 관계에서 한쪽 참조를 직렬화에서 제외하고자 할 때 사용
    private Jikwon jikwon;
}