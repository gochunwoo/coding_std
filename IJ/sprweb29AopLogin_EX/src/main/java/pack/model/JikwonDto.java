package pack.model;

import lombok.Data;

@Data
public class JikwonDto {
    private int jikwonno;
    private String jikwonname;
    private String busername;
    private String jikwonjik;
    private String busertel;
    private String jikwongen;

    public JikwonDto(Jikwon j, Buser b) {
        this.jikwonno = j.getJikwonno();
        this.jikwonname = j.getJikwonname();
        this.busername = b.getBusername();
        this.jikwonjik = j.getJikwonjik();
        this.busertel = b.getBusertel();
        this.jikwongen = j.getJikwongen();
    }
}
