package pack.aspect;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Component;

@Component
public class LoginClass {
    public boolean loginCheck(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpSession session = request.getSession(false); // 기존 세션만 가져오기
        if (session != null && session.getAttribute("nameok") != null) {
            return true;  // 로그인 성공
        } else {
            response.sendRedirect("/login"); // 로그인 실패 → 로그인 페이지로 이동
            return false;
        }
    }
}