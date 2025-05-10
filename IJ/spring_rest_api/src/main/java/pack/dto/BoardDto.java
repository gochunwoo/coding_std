package pack.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardDto {

    private int num;
    private String author;
    private String title;
    private String content;
    private int readcnt;
    private String bwrite;
}
