package pack.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.model.DataDao;
import pack.model.Jikwon;

import java.util.List;

@Controller
public class ListController {
    @Autowired
    private DataDao dataDao;

    @GetMapping("/")
    public String list(HttpServletRequest request, HttpServletResponse response, Model model) {
        List<Jikwon> jlist = dataDao.findAll();

        model.addAttribute("jlist", jlist);

        return "list";
    }
}
