package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="buser")
public class Buser {
    @Id
    private int buserno;

    private String busername;
    private String busertel;
}
