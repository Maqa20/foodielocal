package az.itbrains.foodielocal;

import az.itbrains.foodielocal.model.Role;
import az.itbrains.foodielocal.model.User;
import az.itbrains.foodielocal.repository.RoleRepository;
import az.itbrains.foodielocal.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@SpringBootApplication
public class FoodielocalApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodielocalApplication.class, args);
	}
    @Bean
    CommandLineRunner init(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder encoder) {
        return args -> {
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseGet(() -> roleRepository.save(new Role("ROLE_ADMIN")));

            if (userRepository.findByEmail("maqazeynalov866@gmail.com").isEmpty()) {
                User admin = new User();
                admin.setEmail("maqazeynalov866@gmail.com");
                admin.setFullName("Admin");
                admin.setPassword(encoder.encode("admin123"));
                admin.setRoles(Set.of(adminRole));
                userRepository.save(admin);
            }
        };
    }
}
