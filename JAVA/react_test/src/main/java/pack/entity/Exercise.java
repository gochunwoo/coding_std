package pack.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;              // 기본키, 자동증가

    @Column(nullable = false)
    private String name;          // 운동명

    @Column(nullable = false)
    private int duration;         // 운동시간(분)

    @Column(nullable = false)
    private int calorieburn;      // 칼로리소모량
}