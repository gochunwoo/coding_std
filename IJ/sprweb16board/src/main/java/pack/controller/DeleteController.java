package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import pack.model.BoardDaoProcess;

@Controller
public class DeleteController {
	@Autowired
	private BoardDaoProcess daoProcess;
	
	@GetMapping("delete")
	public String del(Model model, @RequestParam("num")int num,
			@RequestParam("page")String page) {
		// 비밀번호 비교 작업 생략...
		try {
			daoProcess.delete(num);
			return "redirect:/list?page=" + page;
		} catch (Exception e) {
			model.addAttribute("msg" + e.getMessage());
			return "error";
		}
	}
}
