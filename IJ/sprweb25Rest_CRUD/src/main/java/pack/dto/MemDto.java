// dto/MemDto.java
package pack.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemDto {
    private int num;
    private String name;
    private String addr;

    // Entity → DTO 변환용 static 메서드
    public static MemDto fromEntity(pack.entity.Mem mem) {
        MemDto dto = new MemDto();
        dto.setNum(mem.getNum());
        dto.setName(mem.getName());
        dto.setAddr(mem.getAddr());
        return dto;
    }
}
