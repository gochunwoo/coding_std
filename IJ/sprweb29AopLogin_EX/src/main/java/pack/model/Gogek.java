package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "gogek")
@Data
public class Gogek {
    @Id
    private int gogekno;
    private String gogekname;
    private String gogektel;
    private String gogekjumin;
    private int gogekdamsano;
}
