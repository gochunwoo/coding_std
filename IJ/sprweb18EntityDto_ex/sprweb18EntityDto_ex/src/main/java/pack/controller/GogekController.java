package pack.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import pack.model.DataDao;
import pack.model.GogekDto;


@Controller
public class GogekController {
	@Autowired
	private DataDao dao;
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("list")
	public String list(Model model, @RequestParam("gender")String gender) {
		List<GogekDto> list = null;
		if(gender.equals("all")) {
			list = dao.getDataAll();
			model.addAttribute("selectedGender", "all");
		}else if(gender.equals("man")) {
			list = dao.getDataMan();
			model.addAttribute("selectedGender", "man");
		}else if(gender.equals("woman")) {
			list = dao.getDataWoman();
			model.addAttribute("selectedGender", "woman");
		}
		model.addAttribute("data", list);

		return "list";
	}

}
