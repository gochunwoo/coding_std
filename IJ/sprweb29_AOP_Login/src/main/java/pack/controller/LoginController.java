package pack.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pack.entity.Jikwon;
import pack.repository.JikwonRepository;
import pack.service.DataDao;

import java.util.Optional;

@Controller
public class LoginController {
    @Autowired
    private DataDao dataDao;

    @GetMapping("login")
    public String getLogin() {
        return "login";
    }

    @PostMapping("login")
    public String loginProcess(HttpSession httpSession,
                               @RequestParam("no")String no,
                               @RequestParam("name")String name) {
        // no, name을 SQL 처리, no만으로 SQL처리 가능
        Jikwon jikwon = dataDao.jikwonLogin(no); // no만 사용

        if(jikwon != null) {
            if(name.equals(jikwon.getJikwonname())) {
                httpSession.setAttribute("nameok", name); // 로그인 성공으로 session 설정함
            }
        }
        return "redirect:/jikwonlist";
    }

    @GetMapping("logout")
    public String logoutProcess(HttpSession httpSession) {
        httpSession.removeAttribute("nameok");
        return "redirect:/";
    }

}
