package pack.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostDataBean {
    private String name;
    private String addr;

    public String getAddr() {
        return addr;
    }
    public String getName() {
        return name;
    }
    public void setAddr(String addr) {
        this.addr = addr;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Override
    public String toString() {
        return "PostDataBean [이름 : " + name + ", addr : " + addr + "]";
    }


}
