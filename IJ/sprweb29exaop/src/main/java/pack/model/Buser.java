package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity
public class Buser {
    @Id
    private String buserno;

    private String busername;
    private String busertel;
}
