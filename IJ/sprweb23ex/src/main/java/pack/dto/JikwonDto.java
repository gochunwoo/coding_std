package pack.dto;


import lombok.Builder;
import lombok.Getter;
import pack.entity.Jikwon;

@Getter
@Builder
public class JikwonDto {
    private String jikwonName;
    private String jik;
    private String buserName;
    private String buserTel;

    public static JikwonDto fromEntity(Jikwon j) {
        return JikwonDto.builder()
                .jikwonName(j.getJikwonname())
                .jik(j.getJikwonjik())
                .buserName(j.getBuser().getBusername())
                .buserTel(j.getBuser().getBusertel())
                .build();
    }
}
