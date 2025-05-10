package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "gogek")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Gogek {
    @Id
    private int gogekno;

    private String gogekname;
    private String gogektel;
    private String gogekjumin;
    private int gogekdamsano;
}
