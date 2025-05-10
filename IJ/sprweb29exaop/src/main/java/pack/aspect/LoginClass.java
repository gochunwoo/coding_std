package pack.aspect;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;

@Controller
public class LoginClass {
    public boolean loginCheck(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpSession httpSession = request.getSession(false);
        return httpSession != null && httpSession.getAttribute("isLogin") != null;
    }
}
