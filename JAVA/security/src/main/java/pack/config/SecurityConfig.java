package pack.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration  // 설정 클래스 임을 명시
@EnableWebSecurity  // Spring Security를 사용 하겟다 는 선언
public class SecurityConfig {

    // SecurityFilterChain을 Bean 으로 등록
    // HttpSecurity는 Spring Security의 보안 설정 핵심 객체
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/", "/login").permitAll()     // 누구나 접근 가능
                        .requestMatchers("/user/**").hasRole("USER")    // USER만 접근 가능
                        .requestMatchers("/admin/**").hasRole("ADMIN")  // ADMIN만 접근 가능
                        .anyRequest().authenticated()                     // 그외는 로그인 필요
                )
                // 로그인 설정
                .formLogin(login -> login
                        .loginPage("/login")                                        // 사용자 정의후 로그인 페이지
                        .defaultSuccessUrl("/", true)   // 로그인 성공후 리 다이 렉트 할 경로 (true면 무조건 이동)
                        .permitAll()                                                // 로그인 경로는 인증 없이 접ㅂ근 가능 해야함
                )
                // 로그 아웃 설정
                .logout(logout -> logout
                        .logoutSuccessUrl("/")  // 로그 아웃 성공시 이동할 경로
                        .permitAll()            // 로그 아웃 경로도 인증 없이 접근 가능 해야 함
                );
        // 위 설정들을 포함한 SecurityFilterChain 객체 반환
        return http.build();
    }

    // 사용자 정보를 제공할 UserDetailsService 빈 설정 (DB 대신 메모리 로 저장)
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
                .username("user")           // 아이디
                .password("{noop}1234")     // 비밀 번호 (noop = 암호화 안함)
                .roles("USER")              // 부여된 역할 (ROLE_USER)
                .build();

        // ADMIN 권한 계정 생성
        UserDetails admin = User.builder()
                .username("admin")          // 아이디
                .password("{noop}1234")     // 비밀 번호 (noop = 암호화 안함)
                .roles("ADMIN")             // 부여된 역할 (ROLE_ADMIN)
                .build();

        // InMemoryUserDetailsManager 를 통해 메모리에 사용자 저장
        return new InMemoryUserDetailsManager(user, admin);
    }
    /*
    이 파일이 설정한 건?
    1. user/1234 로 로그인 하면 /user/** 에 접근 가능
    2. admin/1234 로 로그인 하면 /admin/** 에 접근 가능
    3. 로그인 없이 /user, /admin 접근 하면 /login 으로 자동 으로 리 다이렉 트
    4. 로그인, 로그 아웃 URL은 /login , /logout 으로 자동 설정됨
     */
}
