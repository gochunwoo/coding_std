package pack.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pack.model.Gogek;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GogekForm {
    private int gogekno;
    private int gogekdamsano;
    private String gogekname, gogektel, gogekjumin;
    private Integer gogekage;

    public Gogek toEntity() {
        return Gogek.builder()
                .gogekno(this.getGogekno())
                .gogekname(this.getGogekname())
                .gogektel(this.getGogektel())
                .gogekjumin(this.getGogekjumin())
                .gogekdamsano(this.getGogekdamsano())
                .build();
    }

    public static GogekForm fromEntity(Gogek entity) {
        return GogekForm.builder()
                .gogekno(entity.getGogekno())
                .gogekname(entity.getGogekname())
                .gogektel(entity.getGogektel())
                .gogekjumin(entity.getGogekjumin())
                .gogekdamsano(entity.getGogekdamsano())
                .build();
    }
}