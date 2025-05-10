package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import jakarta.servlet.http.HttpServletRequest;
import pack.model.BoardDaoProcess;

@Controller
public class ReplyController {
	@Autowired
	private BoardDaoProcess daoProcess;
	
	@GetMapping("reply")
	public String reply(@RequestParam("num")int num,
			@RequestParam("page")String page,
			Model model) {
		model.addAttribute("data", daoProcess.detail(num)); // 원글 읽기
		model.addAttribute("page", page);
		return "reply";
	}
	
	@PostMapping("reply")
	public String replyProcess(BoardBean bean, @RequestParam("page")String page, Model model) {
		// onum 갱신
		bean.setOnum(bean.getOnum() + 1);
		daoProcess.updateOnum(bean);
	
		// 댓글 저장
		bean.setNum(daoProcess.currentMaxNum() + 1);
		HttpServletRequest request = 
				((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
		String ip = request.getHeader("X_FORWARDED_FOR");
		if (ip == null) ip = request.getRemoteAddr();
		bean.setBip(ip);
		bean.getBdate();
		bean.setNested(bean.getNested() + 1);
		
		try {
			daoProcess.insertReply(bean);
			return "redirect:/list?page=" + page;
		} catch (Exception e) {
			model.addAttribute("msg", e.getMessage());
			return "error";
		}
	}
}
