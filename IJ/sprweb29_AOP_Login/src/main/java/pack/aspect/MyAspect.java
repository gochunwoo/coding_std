package pack.aspect;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class MyAspect {
    @Autowired
    private LoginClass loginClass;

    @Around("execution(* pack.controller.JikwonController.jikwonProcess(..))")
    public Object aopProcess(ProceedingJoinPoint joinPoint) throws Throwable {
        HttpServletRequest request = null;
        HttpServletResponse response = null;

        for (Object obj : joinPoint.getArgs()) {
            if (obj instanceof HttpServletRequest req) request = req;
            if (obj instanceof HttpServletResponse res) response = res;
        }

        if (request != null && response != null) {
            if (!loginClass.loginCheck(request, response)) {
                return null; // 로그인 실패 시 핵심 로직 중단
            }
        }

        return joinPoint.proceed(); // 로그인 성공 시 핵심 로직 실행
    }
}