package pack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping
    @ResponseBody
    public String adminPage() {
        return "ADMIN 권한이 있으므로 현재 페이지를 볼수있습니다~";
    }
}
