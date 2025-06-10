package pack;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Buser {
    @Id
    private int buserno;

    private String busername;
    private String buserloc;
    private String busertel;

    @OneToMany(mappedBy = "buser", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore // 순환 참조 방지, 해당 어노테이션이 적용된 필드는 JSON 데이터를 변환하거나 객체 변환활 때 포함하지 않음
    private List<Jikwon> jikwons;
}
