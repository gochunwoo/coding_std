package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.model.DataDao;
import pack.model.JikwonDto;

import java.util.ArrayList;

@Controller
public class TestController {

    @Autowired
    private DataDao dataDao;

    @GetMapping("testjpa")
    public String listProcess(Model model) {    // 전체자료 읽기
        ArrayList<JikwonDto> slist = (ArrayList<JikwonDto>)dataDao.getDataAll();
        model.addAttribute("datas", slist);
        return "list";
    }

    @GetMapping("search")
    public String searchProcess(FormBean formBean, Model model) {
        ArrayList<JikwonDto> slist = (ArrayList<JikwonDto>)dataDao.getDataSearch(formBean.getSearchValue());
        model.addAttribute("datas", slist);
        model.addAttribute("count", slist.size());  // 인원 수 추가
        return "list";
    }


}