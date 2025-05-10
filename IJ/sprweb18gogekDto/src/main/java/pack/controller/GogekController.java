package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pack.model.GogekDto;
import pack.model.GogekService;

import java.util.List;

@Controller
public class GogekController {
    @Autowired
    private GogekService service;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/gogeklist")
    public String gogekList(@RequestParam(defaultValue = "전체") String gender, Model model) {
        List<GogekDto> list = service.getAll(gender);
        model.addAttribute("list", list);
        model.addAttribute("count", list.size());
        return "gogeklist";
    }
}
