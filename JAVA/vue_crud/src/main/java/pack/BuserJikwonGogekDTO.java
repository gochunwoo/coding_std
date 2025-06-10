package pack;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BuserJikwonGogekDTO {
    private Integer buserno;
    private String busername;
    private String buserloc;

    private Integer jikwonno;
    private String jikwonname;
    private String jikwonjik;
    private Integer jikwonpay;

    private Integer gogekno;
    private String gogekname;
    private String gogektel;

}
