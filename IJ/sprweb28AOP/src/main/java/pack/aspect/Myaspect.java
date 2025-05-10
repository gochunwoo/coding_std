package pack.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class Myaspect {
    @Autowired
    private SecurityClass securityClass;

    @Around("execution(public String processMsg()) || execution(public String businessMsg()) ")
    public Object aopProcess(ProceedingJoinPoint joinPoint) throws Throwable {
        securityClass.mySecurity(); // 핵심 메소드 수행 전
        Object object = joinPoint.proceed();

        // 수행후

        return object;
    }
}
