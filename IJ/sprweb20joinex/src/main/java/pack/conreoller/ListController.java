package pack.conreoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.model.DataProcess;
import pack.model.Gogek;
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

    @GetMapping("/list")
    public String list(Model model) {
        List<Jikwon> jikwonList = dataProcess.getAllJikwon();
        model.addAttribute("jikwonList", jikwonList);
        return "list";
    }

    @GetMapping("/gogeklist")
    public String gogekList(int jikwonno, Model model) {
        List<Gogek> gogekList = dataProcess.getGogekListByJikwon(jikwonno);
        boolean hasGogek = !gogekList.isEmpty();
        model.addAttribute("gogekList", gogekList);
        model.addAttribute("hasGogek", hasGogek);
        return "gogeklist";
    }
}
