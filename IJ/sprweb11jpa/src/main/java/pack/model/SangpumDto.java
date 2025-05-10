package pack.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor          // 기본 생성자(매개변수 없는 생성자) 자동 생성
@Entity                     // 이 클래스는 DB 테이블과 매핑할거야!
@Table(name = "sangdata")   // DB에 있는 테이블 이름은 sangdata야
public class SangpumDto {   // jpa 는 실제 테이블 sangdata 를 영속성 컨텍스트에서 SangpumDto 클래스로 처리
    @Id                     // sangdata 테이블의 primary key 칼럼과 매핑, JPA 는 이 필드를 기준으로 레코드를 식별
    @Column(name = "code")  // sangdata 테이블의 code 칼럼과 sangpumDto의 code 필드를 연결
    private int code;

    @Column(name = "sang", nullable = false)    // null  false 허용안함
    private String sang;

    private int su;
    private int dan;
}
