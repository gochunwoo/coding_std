package pack.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pack.model.BuserDto;
import pack.model.DataDao;
import pack.model.JikwonDto;

@Controller
public class DataController {
    @Autowired
    private DataDao dataDao;

    @GetMapping("buserlist")
    public String buserProcess(Model model) {
        List<BuserDto> blist = dataDao.buserList();

        model.addAttribute("blist", blist);
        return "list";
    }

    @GetMapping("jikwonlist")
    @ResponseBody
    public Map<String, Object> jikwonProcess(@RequestParam("buserno") int buserno) {
        List<JikwonDto> list = dataDao.jikwonList(buserno);
        Map<String, Object> jikwonList = new HashMap<String, Object>();
        jikwonList.put("datas", list);
        return jikwonList;
    }
}
