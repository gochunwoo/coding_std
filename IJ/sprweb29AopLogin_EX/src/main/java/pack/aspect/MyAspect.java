package pack.aspect;

import jakarta.servlet.http.HttpSession;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class MyAspect {
    @Before("execution(* pack.controller.JikwonController.showJikwonList(..)) && args(session,..)")
    public void checkLogin(HttpSession session) {
        if (session.getAttribute("loginGogek") == null) {
            System.out.println("[AOP] 비로그인: 전체직원 출력");
        } else {
            System.out.println("[AOP] 로그인: 담당직원 출력");
        }
    }
}
