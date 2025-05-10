package pack.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class JikwonDto {
    private int jikwonno;
    private String jikwonname;
    private String jikwonjik;
    private String buser;

    public static JikwonDto toDto(Jikwon jikwon) {
        return JikwonDto.builder()
                .jikwonno(jikwon.getJikwonno())
                .jikwonname(jikwon.getJikwonname())
                .jikwonjik(jikwon.getJikwonjik())
                .buser(jikwon.getBuser())
                .build();
    }
}
