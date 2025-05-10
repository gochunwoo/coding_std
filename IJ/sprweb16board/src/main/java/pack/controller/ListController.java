package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import pack.model.Board;
import pack.model.BoardDaoProcess;

@Controller
public class ListController {
	@Autowired
	private BoardDaoProcess daoProcess;
	
	@GetMapping("list")
	public String listProcess(Model model, 
			@RequestParam(required = false, defaultValue = "1", value = "page")int page) {
		// Paging
		Page<Board> list = daoProcess.listAll(page - 1);
		
		int nowPage = list.getPageable().getPageNumber() + 1;
		int startPage = Math.max(nowPage - 4, 1);
		int endPage = Math.min(nowPage + 5, list.getTotalPages());
		//Math.max(5, 3); 하면 5 반환
		//Math.max(5.1, 6.0); 하면 6.0 반환
		
		model.addAttribute("datas", list);
		model.addAttribute("nowPage", nowPage);
		model.addAttribute("startPage", startPage);
		model.addAttribute("endPage", endPage);
		model.addAttribute("page", page);
		
		
		return "list";
	}
	
	@GetMapping("search")
	public String searchProcess(BoardBean bean, Model model) {
		Page<Board> list = daoProcess.search(bean);
		
		int nowPage = list.getPageable().getPageNumber() + 1;
		int startPage = Math.max(nowPage - 4, 1);
		int endPage = Math.min(nowPage + 5, list.getTotalPages());
		
		model.addAttribute("datas", list);
		model.addAttribute("nowPage", nowPage);
		model.addAttribute("startPage", startPage);
		model.addAttribute("endPage", endPage);
		
		return "list";
	}
}
