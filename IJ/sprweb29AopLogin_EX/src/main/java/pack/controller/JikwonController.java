package pack.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.model.Buser;
import pack.model.BuserRepository;
import pack.model.Gogek;
import pack.model.Jikwon;
import pack.model.JikwonDto;
import pack.model.JikwonRepository;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class JikwonController {

    @Autowired
    private JikwonRepository jikwonRepository;
    @Autowired
    private BuserRepository buserRepository;

    @GetMapping("/jikwon")
    public String showJikwonList(HttpSession session, Model model) {
        Gogek gogek = (Gogek) session.getAttribute("loginGogek");
        List<Jikwon> jlist;

        if (gogek != null) {
            // 로그인 → 담당 직원만 출력
            jlist = jikwonRepository.findAll().stream()
                    .filter(j -> j.getJikwonno() == gogek.getGogekdamsano())
                    .collect(Collectors.toList());
        } else {
            // 비로그인 → 전체 직원 출력
            jlist = jikwonRepository.findAll();
        }

        List<JikwonDto> result = jlist.stream().map(j -> {
            Buser b = buserRepository.findByBuserno(j.getBusernum());
            return new JikwonDto(j, b);
        }).collect(Collectors.toList());

        model.addAttribute("jlist", result);
        return "jikshow"; // templates/jikshow.html
    }
}
