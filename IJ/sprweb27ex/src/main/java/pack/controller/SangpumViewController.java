package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import pack.model.DataProcess;
import pack.model.Sangpum;

@Controller
@RequestMapping("/products")
public class SangpumViewController {

    @Autowired
    private DataProcess dataProcess;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/insert")
    public String insert() {
        return "insert";
    }

    @GetMapping("/update/{code}")
    public String update(@PathVariable("code") int code, Model model) {
        Sangpum sangpum = dataProcess.getData(code);
        model.addAttribute("data", sangpum);
        return "update";
    }
}
