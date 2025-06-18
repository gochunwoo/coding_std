package pack;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration  // 스프링 설정 클래스임을 나타냄
@EnableWebSecurity  // 스프링 시큐리티 활성화
public class SecurityConfig {
    private static final Logger log = LoggerFactory.getLogger(SecurityConfig.class);  // 애플리케이션의 보안 설정을 정의(보안설정 , 인증, 폼로긴/......
    // SecurityFilterChain : 요청 -> 필터체인 -> 인증 검사를 처리하는 핵심 컴포넌트
    // HttpSecurity : 보안 정책을 메서드 체이닝 방식으로 구성할수 있게 해주는 객체

    // 시큐리티 필터 체인 설정 빈으로 등록
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // 어떤 요청에 어떤 인증/인가 정책을 적용할지 결정
                .authorizeHttpRequests(auth ->
                        auth
                             // 여기에 나열된 URL은 누구나 접근 가능(로그인안해도됨)
                            .requestMatchers("/login", "/kbs", "/mbc/**", "/error")
                            .permitAll()
                             // // 그외의 모든 요청은 인증이 필요함(로그인 해야 접근 가능)
                            .anyRequest().authenticated()
                )
                // 스프링 시큐리티가 제공하는 로그인 폼이 아닌, 사용자 정의 로그인 폼을 사용
                .formLogin(flog ->
                        flog
                            .loginPage("/login")
                            .permitAll()  // 로그인 페이지는 인증없이 누구나 접근 가능
                )
                // 로그아웃 기능을 설정 (필요할 때만)
                .logout(logout ->
                        logout
                            .logoutUrl("/logout")  // 로그아웃 URL 설정 (기본이 "/logout" 이므로 설정하지 않아도 됨)
                            .deleteCookies("JSESSIONID")
                            .permitAll()
                );

        return http.build();  // .build() 를 호출함으로써 설정이 완료된 SecurityFilterChain 객체를 빈으로 등록함
    }

    // logout.html에서 user, 제공된 password 대신 내가 입력한 id, password를 사용하면...
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails userDetails = User.builder()
                                        .username("admin")
                                        .password(passwordEncoder().encode("123"))  // 암호화
                                        .build();
        // InMemoryUserDetailsManager : 영구적 저장소 사용 X. 재시작하면 정보 사라짐
        return new InMemoryUserDetailsManager(userDetails);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // BCrypt 해싱 알고리즘을 사용
    }

}
