package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pack.model.GogekDataProcess;

@Controller
public class GogekController {
	@Autowired
	private GogekDataProcess process;
	
	@GetMapping("/")
	public String list(Model model) {
		model.addAttribute("list", process.getDataAll());
		return "list";
	}
}