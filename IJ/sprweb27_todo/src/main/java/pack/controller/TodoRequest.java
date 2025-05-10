package pack.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoRequest {  // 요청받을때
    private String title;
    private Integer order;
    private Boolean completed;
}
