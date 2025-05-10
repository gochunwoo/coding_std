package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.model.DataDao;
import pack.model.JikwonDto;

import java.util.List;

@Controller
public class ListController {

    @Autowired
    private DataDao dao;

    @GetMapping("list")
    public String list(Model model, FormBean bean) {
        List<JikwonDto> list;

        if (bean.getSearchValue() == null || bean.getSearchValue().isEmpty()) {
            list = dao.getDataAll();
        } else {
            list = dao.getDataSearch(bean);
        }

        model.addAttribute("jikwon", list);
        return "list";
    }
}
