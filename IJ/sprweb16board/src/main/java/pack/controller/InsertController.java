package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import jakarta.servlet.http.HttpServletRequest;
import pack.model.BoardDaoProcess;

@Controller
public class InsertController {
	@Autowired
	private BoardDaoProcess daoProcess;

	@GetMapping("insert")
	public String insertForm() {
		return "insform";
	}

	@PostMapping("insert")
	public String insertprocess(BoardBean bean, Model model) {
		// client ip 얻기
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
				.getRequest();
		String ip = request.getHeader("X_FORWARDED_FOR");
		if (ip == null)
			ip = request.getRemoteAddr();
		System.out.println("ip : " + ip);
		bean.setBip(ip);
		bean.setBdate();
		int newNum = daoProcess.currentMaxNum() + 1; // 새글 번호
		bean.setNum(newNum);
		bean.setReadcnt(0);
		bean.setGnum(newNum);
		bean.setOnum(0);
		bean.setNested(0);

		try {
			daoProcess.insert(bean);
			return "redirect:/list"; // 추가 후 목록 보기
		} catch (Exception e) {
			model.addAttribute("msg", e.getMessage());
			return "error"; // 정적인 에러 페이지를 호출. 현재 컨트롤러가 직접 뷰를 응답

			// return "forward:/error";
			// Spring이 내부적으로 현재 요청을 /error로 다시 전달하고, /error 경로를 처리하는 다른 컨트롤러 메소드가 실행됨.
			// 일종의 내부 요청 재전달(현재 컨트롤러가 아니라 다른 컨트롤러를 부름). URL은 변화 없다.
		}
	}
}
