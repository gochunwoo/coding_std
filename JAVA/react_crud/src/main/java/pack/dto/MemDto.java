package pack.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@Alias( "memDto")
@NoArgsConstructor
@AllArgsConstructor
public class MemDto {
    private int num;
    private String name;
    private String addr;
}
