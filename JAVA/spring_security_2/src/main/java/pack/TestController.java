package pack;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;

@Controller
public class TestController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }

    // AuthenTication : 현재 로그인한 사용자 관련 정보를 담고 있다
    @GetMapping("/default")
    public void defaultfterLogin(Authentication authentication, HttpServletResponse response) throws IOException {
        for (GrantedAuthority authority : authentication.getAuthorities()) {
            String role = authority.getAuthority(); // 특정 권한(ROLE)을 문자 열로 반환

            if (role.equals("ROLE_ADMIN")) {
                response.sendRedirect("/admin");  // ADMIN 역할 이면 /admin 요청이 이루 어짐
                return;
            } else if (role.equals("ROLE_USER")) {
                response.sendRedirect("/user");  // USER 역할 이면 /user 요청이 이루 어짐
                return;
            } else if (role.equals("ROLE_JAMES")) {
                response.sendRedirect("/james"); // JAMES 역할 이면 /james 요청이 이루 어짐
                return;
            }
        }
        response.sendRedirect("/common");  // 그 위의 경우 /common 요청이 이루 어짐

    }

    @GetMapping("/admin")
    public String adminlogin(Model model) {
        model.addAttribute("msg", "관리자 권한");
        return "commonshow";
    }

    @GetMapping("/user")
    public String userlogin(Model model) {
        model.addAttribute("msg", "일반 사용자 권한");
        return "commonshow";
    }

    @GetMapping("/james")
    public String jameslogin(Model model) {
        model.addAttribute("msg", "james 권한");
        return "commonshow";
    }

    @GetMapping("/common")
    public String commonlogin(Model model) {
        model.addAttribute("msg", "모두 에게 허용된 페이지");
        return "commonshow";
    }

}
