package pack.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pack.model.DataDao;
import pack.model.SangpumDto;

@Controller
public class TestController {
    @Autowired
    private DataDao dataDao;

    @GetMapping("sangpums")
    @ResponseBody
    public Map<String, Object> abc() {
        List<Map<String, String>> list = new ArrayList<Map<String, String>>();
        Map<String, String> data = null;

        for (SangpumDto s : dataDao.getSangpumAll()) {
            data = new HashMap<String, String>();
            data.put("code", String.valueOf(s.getCode()));
            data.put("sang", s.getSang());
            data.put("su", s.getSu());
            data.put("dan", s.getDan());
            list.add(data);
        }
        Map<String, Object> sangList = new HashMap<String, Object>();
        sangList.put("datas", list);
        return sangList;
    }
}
