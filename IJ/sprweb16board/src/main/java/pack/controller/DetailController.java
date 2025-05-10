package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import pack.model.BoardDaoProcess;

@Controller
public class DetailController {
	@Autowired
	private BoardDaoProcess daoProcess;
	
	@GetMapping("detail")
	public String detailProcess(@RequestParam("num")int num,
			@RequestParam("page")String page, Model model) {
		// 조회수 증가
		daoProcess.updateReadCnt(num);
		
		// 상세보기 자료를 읽기
		model.addAttribute("data", daoProcess.detail(num));
		model.addAttribute("page", page);
		
		return "detail";
	}
}
