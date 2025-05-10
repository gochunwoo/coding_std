package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import pack.model.Board;
import pack.model.BoardDaoProcess;

@Controller
public class UpdateController {
	@Autowired
	private BoardDaoProcess daoProcess;

	@GetMapping("update")
	public String edit(Model model, @RequestParam("num") int num, @RequestParam("page") String page) {
		// 수정 대상 자료 읽기
		Board board = daoProcess.detail(num);

		model.addAttribute("data", board);
		model.addAttribute("page", page);

		return "update";
	}

	@PostMapping("update")
	public String editProcess(BoardBean bean, @RequestParam("page") String page, Model model) {
		// 비밀번호 비교
		String pass = daoProcess.selectPass(bean.getNum());
		// System.out.println(pass + " " + bean.getPass());

		if (bean.getPass().equals(pass)) {
			try {
				daoProcess.update(bean);
				return "redirect:/list?page=" + page;

			} catch (Exception e) {
				model.addAttribute("msg", e.getMessage());
				return "error";
			}
		} else {
			model.addAttribute("page", page);
			return "pass_err";
		}
	}

}
