package pack.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
// @Table(name = "mem") 클래스 이름이 Mem이면	테이블 이름도 mem으로 인식함 (소문자로 자동 처리)
public class Mem {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동증가
    @Column(name = "num")
    private int num;

    @Column(name = "name", nullable = false)
    private String name;


    private String addr;
}
