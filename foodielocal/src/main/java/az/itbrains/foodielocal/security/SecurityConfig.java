package az.itbrains.foodielocal.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**", "/css/**", "/js/**", "/images/**").permitAll()
                        .requestMatchers("/admin/**").hasRole("ADMIN")
                        .anyRequest().authenticated()
                )
                .formLogin(form -> form
                        .loginPage("/auth/login") // Giriş formu
                        .defaultSuccessUrl("/", true) // Girişdən sonra yönləndirmə
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/auth/logout") // 🔥 Bu URL POST ilə çağırılır
                        .logoutSuccessUrl("/auth/login?logout=true") // 🔁 Uğurlu çıxışdan sonra yönləndirmə
                        .permitAll()
                )
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers("/auth/logout") // Çıxış URL-i üçün CSRF yoxlamasını söndür
                );
        return http.build();
    }
}