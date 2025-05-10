package pack.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pack.model.Gogek;
import pack.model.GogekRepository;

@Controller
public class LoginController {

    @Autowired
    private GogekRepository gogekRepository;

    // 로그인 폼 보여주기 (GET /loginForm)
    @GetMapping("/loginForm")
    public String loginForm() {
        return "login"; // templates/login.html
    }

    // 로그인 처리 (POST /login) 
    @PostMapping("/login")
    public String login(@RequestParam("gogekno") int gogekno,  // ← 이름 명시!
                        @RequestParam("gogekname") String gogekname,  // ← 이름 명시!
                        HttpSession session) {
        Gogek gogek = gogekRepository.findByGogeknoAndGogekname(gogekno, gogekname);
        if (gogek != null) {
            session.setAttribute("loginGogek", gogek);
            return "redirect:/jikwon"; // 로그인 성공 → 직원목록으로 이동
        } else {
            return "redirect:/loginForm"; // 로그인 실패 → 로그인폼 다시
        }
    }

    // 🔥 로그아웃 추가 (GET /logout)
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate(); // 세션 초기화
        return "redirect:/"; // 메인 페이지로 리다이렉트
    }
}
