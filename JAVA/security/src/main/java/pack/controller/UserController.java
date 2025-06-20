package pack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {

    @GetMapping
    @ResponseBody  // HTML이 아닌 문자열그대로 출력
    public String userPage() {
        return "USER 권한이 있으므로 접속에 성공하였습니다";
    }
}
