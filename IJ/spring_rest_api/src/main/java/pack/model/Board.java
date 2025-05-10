package pack.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "springboard")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num;

    private String author;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private int readcnt;

    @Column(name = "bwrite", updatable = false)
    private String bwrite; // 등록시간 (추후 LocalDateTime 자동설정으로 바꿀수있음)
}
