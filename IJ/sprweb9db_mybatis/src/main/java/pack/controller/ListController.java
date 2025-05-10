package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.model.DataDao;
import pack.model.SangpumDto;

import java.util.ArrayList;

@Controller
public class ListController {

    @Autowired
    private DataDao dataDao;

    @GetMapping("testdb")
    public String listProcess(Model model) {
        ArrayList<SangpumDto> slist = (ArrayList<SangpumDto>) dataDao.getDataAll();
        model.addAttribute("datas", slist);
        return "list";
    }

    @GetMapping("search")
    public String searchProcess(FormBean bean,Model model) {
        ArrayList<SangpumDto> slist = (ArrayList<SangpumDto>) dataDao.getDataSearch(bean);
        model.addAttribute("datas", slist);
        return "list";
    }
}
