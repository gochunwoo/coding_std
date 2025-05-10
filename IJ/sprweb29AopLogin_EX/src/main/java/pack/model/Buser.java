package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "buser")
@Data
public class Buser {
    @Id
    private int buserno;
    private String busername;
    private String buserloc;
    private String busertel;
}
