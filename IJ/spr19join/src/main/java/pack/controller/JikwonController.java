package pack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pack.model.JikwonService;

@Controller
public class JikwonController {
    private JikwonService jikwonService;

    public JikwonController(JikwonService jikwonService){
        this.jikwonService = jikwonService;
    }


    @GetMapping("jikwonlist1")
    public String listJikwon(Model model) {
        model.addAttribute("jikwons" , jikwonService.getJikwonDatas());
        return "jikwonlist";
    }

    @GetMapping("jikwonlist2")
    public String listJikwon2(Model model) {
        model.addAttribute("jikwons" , jikwonService.getJikwonHighPay());
        return "jikwonlist";
    }

    @GetMapping("/jikwonlist3")
    public String listJikwon3(Model model, @RequestParam("busername")String busername) {
        model.addAttribute("jikwons", jikwonService.getBuserName(busername));
        return "jikwonlist";
    }

    @GetMapping("/jikwonlist4")
    public String listTopPaidJikwon(Model model) {
        model.addAttribute("jikwons", jikwonService.getTopPaidJikwon());
        return "jikwonlist";
    }

}
