package pack.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class PutController {

    @PutMapping(value = "hiput1")
    public String put1(){
        System.out.println("put 접수 1");
        return "put1 접수1 결과";
    }

    @PutMapping(value = "hiput2")
    public String put2(@RequestBody PostDataBean postData){
        String name = postData.getName();
        String addr = postData.getAddr();

        System.out.println("put 접수 2");
        return "수정용 이름 : " + name + ", 주소 " + addr;
    }

    @DeleteMapping(value = "/hidelete/{num}")
    public String delete(@PathVariable("num") String num){
        System.out.println("delect 접수 num : " + num);
        return "delete할 번호 " + num;
    }

}
