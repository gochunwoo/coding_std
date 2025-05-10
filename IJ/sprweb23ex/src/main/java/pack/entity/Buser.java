package pack.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Buser {
    @Id
    private int buserno;
    private String busername;
    private String buserloc;
    private String busertel;
}