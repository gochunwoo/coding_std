package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "sangdata")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Sangpum {
    @Id
    private double code;

    private String sang;
    private String su;
    private String dan;

}
