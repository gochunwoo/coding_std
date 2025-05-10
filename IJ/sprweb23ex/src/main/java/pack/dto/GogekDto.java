package pack.dto;

import lombok.Builder;
import lombok.Getter;
import pack.entity.Gogek;

@Getter
@Builder
public class GogekDto {
    private int gogekNo;
    private String gogekName;
    private String gogekTel;

    public static GogekDto fromEntity(Gogek g) {
        return GogekDto.builder()
                .gogekNo(g.getGogekno())
                .gogekName(g.getGogekname())
                .gogekTel(g.getGogektel())
                .build();
    }
}
