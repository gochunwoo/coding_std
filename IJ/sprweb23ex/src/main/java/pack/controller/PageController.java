package pack.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/findmanager")
    public String findManagerPage() {
        return "findmanager"; // templates/findmanager.html 렌더링
    }
}
