package pack.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity // 테이블명과 클래스명 일치
@Getter
@Setter
public class Springboard {
    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int num;

    @Column(length = 10)
    private String author;

    @Column(length = 30)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime bwrite = LocalDateTime.now();

    private int readcnt = 0; // 기본 조회수 0
    // private int readcnt = 0; 사용이유
    // Springboard sb = new Springboard(); 이렇게 만들었을때
    // readcnt가 초기값 0이 아니면 null이 들어갈 수도 있어서 오류 나거나 의도치 않은 값이 들어갈수있음.
    // Java 코드에서도 = 0을 해두면,
    // JPA 입장에선 객체 생성 → DB 저장 전까지도 안정적으로 유지함

}
