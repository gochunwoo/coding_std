package pack.aspect;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class MyAspect {
    @Autowired
    LoginClass loginClass;

    @Around("execution(* pack.controller.ListController.list(..))")
    public Object aopProcess(ProceedingJoinPoint joinPoint) throws Throwable {
        HttpServletRequest request = null;
        HttpServletResponse response = null;

        for(Object obj : joinPoint.getArgs()) {
            if(obj instanceof HttpServletRequest) {
                request = (HttpServletRequest) obj;
            }

            if(obj instanceof HttpServletResponse) {
                response = (HttpServletResponse) obj;
            }
        }

//        if(request != null && response != null) {
////            System.out.println(request.getRequestURI() + " " + response.getStatus());
//            if(!loginClass.loginCheck(request, response)) {
//                response.sendRedirect("/login");
//                return null;
//            }
//        }

        return joinPoint.proceed();
    }

}
