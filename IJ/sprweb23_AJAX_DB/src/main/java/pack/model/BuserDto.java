package pack.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BuserDto {
    private int buserno;
    private String busername;
    private String busertel;

    public static BuserDto toDto(Buser buser) {
        return BuserDto.builder()
                .buserno(buser.getBuserno())
                .busername(buser.getBusername())
                .busertel(buser.getBusertel())
                .build();
    }
}
