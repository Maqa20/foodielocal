package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Role;
import az.itbrains.foodielocal.model.User;
import az.itbrains.foodielocal.repository.RoleRepository;
import az.itbrains.foodielocal.repository.UserRepository;
import az.itbrains.foodielocal.service.UserService;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ✅ Spring Security login üçün istifadəçini email ilə tapır
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("İstifadəçi tapılmadı: " + email);
        }

        // Sadə halda yalnız bir rol götürülür (ilk rol)
        Role role = user.getRoles().stream().findFirst()
                .orElseThrow(() -> new RuntimeException("İstifadəçinin rolu yoxdur"));

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                Collections.singleton(new SimpleGrantedAuthority("ROLE_" + role.getName()))
        );
    }

    // ✅ Yeni istifadəçi qeydiyyatı
    @Override
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role defaultRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Rol tapılmadı: USER"));
        user.setRoles(Set.of(defaultRole));
        return userRepository.save(user);
    }

    // ✅ Bütün istifadəçiləri qaytarır
    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // ✅ ID ilə istifadəçi tapır
    @Override
    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("İstifadəçi tapılmadı: " + id));
    }
}