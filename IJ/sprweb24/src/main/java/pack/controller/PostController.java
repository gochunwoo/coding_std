package pack.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class PostController {

    @PostMapping(value = "/hipost")
    public String post1() {
        System.out.println("post1 접수");
        return "post1 결과";
    }

    @PostMapping(value = "/hiform") // ?name=name&addr=addr
    public String post2(@RequestParam("name") String name, @RequestParam("addr") String addr) {
        System.out.println("post2 접수");
        return name + " " + addr;
    }

    @PostMapping(value = "/hiform2") // {name:name, addr:addr}
    public String post3(@RequestBody Map<String, String> postData) {
        String name = postData.get("name");
        String addr = postData.get("addr");
        System.out.println("post3 접수");
        return "이름" + name + ", 주소 " + addr;
    }

    @PostMapping(value = "/hiform3") // {name:name, addr:addr}
    public String post4(@ModelAttribute PostDataBean postData) {
        String name = postData.getName();
        String addr = postData.getAddr();
        System.out.println("post4 접수");
        return postData.toString();
    }

}
