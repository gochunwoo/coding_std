package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import pack.dto.MemDto;
import pack.entity.Mem;
import pack.service.DataProcess;

@Controller
@RequestMapping("/members")
public class MemViewController {
    @Autowired
    private DataProcess dataProcess;

    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/list")
    public String list(){
        return "list";  // 목록보기
    }

    @GetMapping("/new")
    public String insert(){
        return "insert";  // 자료 추가
    }

    @GetMapping("/update/{num}")
    public String updateProcess(@PathVariable("num") int num, Model model) {
        MemDto dto = dataProcess.getData(num);
        model.addAttribute("data", dto);       // 뷰에 전달
        return "update";
    }
}
