package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.model.DataProcess;
import pack.model.Jikwon;

import java.util.List;

@Controller
public class ListController {
    @Autowired
    private DataProcess dataProcess;

    @GetMapping("/")
    public String abc(){
        return "index";
    }

    @GetMapping("jikwonbuser")
    public String abc2(Model model){
        List<Jikwon> list = dataProcess.jikwonBuserList();
        model.addAttribute("blist", list);
        return "jbuser";
    }

    @GetMapping("jikwongogek")
    public String abc3(Model model){
        List<Jikwon> list = dataProcess.jikwonGogekList();
        model.addAttribute("glist", list);
        return "jgogek";
    }

    @GetMapping("gogekdamdang")
    public String abc4(Model model){
        List<String> dlist = dataProcess.gogekDamdangList();
        model.addAttribute("dlist", dlist);
        return "damdang";
    }
}
