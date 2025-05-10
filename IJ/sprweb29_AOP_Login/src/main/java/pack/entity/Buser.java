package pack.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;

import java.util.List;

@Entity
@Getter
@Table(name = "buser")
public class Buser {
    @Id
    private int buserno;

    private String busername;

    @OneToMany(mappedBy = "buser")
    private List<Jikwon> jikwons;
}
