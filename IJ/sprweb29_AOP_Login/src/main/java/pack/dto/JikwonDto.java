package pack.dto;

public class JikwonDto {
    private int jikwonno;
    private String jikwonname;
    private String jikwonjik;
    private String jikwongen;
    private String busername;

    public JikwonDto(int jikwonno, String jikwonname, String jikwonjik, String jikwongen, String busername) {
        this.jikwonno = jikwonno;
        this.jikwonname = jikwonname;
        this.jikwonjik = jikwonjik;
        this.jikwongen = jikwongen;
        this.busername = busername;
    }

    public int getJikwonno() { return jikwonno; }
    public String getJikwonname() { return jikwonname; }
    public String getJikwonjik() { return jikwonjik; }
    public String getJikwongen() { return jikwongen; }
    public String getBusername() { return busername; }
}
