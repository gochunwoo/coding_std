package pack.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="buser")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Buser {
    @Id
    private int buserno;
    private String busername;
    private String buserloc;
    private String busertel;

}
