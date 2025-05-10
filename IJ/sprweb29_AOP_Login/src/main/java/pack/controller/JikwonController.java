package pack.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pack.dto.JikwonDto;
import pack.service.DataDao;
import pack.entity.Jikwon;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class JikwonController {
    @Autowired
    private DataDao dataDao;

    @GetMapping("jikwonlist")
    public String jikwonProcess(HttpServletRequest request, HttpServletResponse response, Model model) {
        List<Jikwon> jlist = dataDao.jikwonListAll();

        // Entity → DTO 변환
        List<JikwonDto> dtoList = jlist.stream()
                .map(j -> new JikwonDto(
                        j.getJikwonno(),
                        j.getJikwonname(),
                        j.getJikwonjik(),
                        j.getJikwongen(),
                        j.getBuser().getBusername()))
                .collect(Collectors.toList());

        model.addAttribute("jlist", dtoList);
        return "jikshow";
    }
}