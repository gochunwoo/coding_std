package pack.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pack.model.DataDao;
import pack.model.Gogek;
import pack.model.Jikwon;

import java.util.ArrayList;
import java.util.List;

@Controller
public class LoginController {
    @Autowired
    private DataDao dataDao;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/login")
    public String loginProcess(HttpSession session,
                               @RequestParam("gogekno")int gogekno,
                               @RequestParam("gogekname") String gogekname) {

        Gogek gogek = dataDao.findByGogekno(gogekno);
//        Jikwon jikwon = dataDao.findByJikwonno(gogek.getGogekdamsano());
        List<Jikwon> jlist = new ArrayList<>();

        if(gogekname != null) {
            if(gogekname.equals(gogek.getGogekname())) {
                System.out.println("Gogek Name: " + gogek.getGogekname());
                session.setAttribute("isLogin", gogekname);
                jlist.add(dataDao.findByJikwonno(gogek.getGogekdamsano()));
                session.setAttribute("jlist" , jlist);
            }
        }

        return "list";
    }

    @GetMapping("logout")
    public String logoutProcess(HttpSession httpSession) {
        httpSession.removeAttribute("isLogin");

        return "redirect:/";
    }
}
