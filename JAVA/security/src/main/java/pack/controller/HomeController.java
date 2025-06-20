package pack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller  // HTML 템플릿과 연결하는 MVC  컨트롤러임을 명시
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home";  // 런더링
    }

    @GetMapping("/login")
    public String login() {
        return "login";  // 렌더링
    }
}
