package pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pack.model.jikwonDao;
import pack.model.jikwonDto;

import java.util.ArrayList;

@Controller
public class jikwonController {
    @Autowired
    private jikwonDao jikwonDao;

    @GetMapping("moveController")
    public String listProcess(Model model, @RequestParam("jikwonjik") String jikwonjik) {
        ArrayList<jikwonDto> list = jikwonDao.getJikwonData(jikwonjik);   // 모델 호출
        model.addAttribute("jikwon", list);
        return "list";
    }
}
