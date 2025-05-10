package pack.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;


@Component
public class SecurityClass {
    public void mySecurity(){
        System.out.println("핵심 메소드 수행전에 보안 작업 실행");
    }
    //  ...
}
