package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Role;
import az.itbrains.foodielocal.model.User;
import az.itbrains.foodielocal.repository.RoleRepository;
import az.itbrains.foodielocal.repository.UserRepository;
import az.itbrains.foodielocal.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.UUID;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ✅ Giriş formu
    @GetMapping("/login")
    public String showLoginForm() {
        return "auth/login";
    }

    // ✅ Qeydiyyat formu
    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "auth/register";
    }

    // ✅ Qeydiyyat prosesi
    @PostMapping("/register")
    public String processRegister(@ModelAttribute("user") User user, Model model) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            model.addAttribute("error", "Bu email artıq qeydiyyatdan keçib.");
            return "auth/register";
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role defaultRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Rol tapılmadı: USER"));

        user.setRoles(Set.of(defaultRole));
        userRepository.save(user);

        return "redirect:/auth/login?registerSuccess=true";
    }

    // ✅ “Şifrəni unutdum” formu
    @GetMapping("/forgot-password")
    public String showForgotPasswordForm() {
        return "auth/forgot-password";
    }

    // ✅ Email ilə sıfırlama linki göndərmək
    @PostMapping("/forgot-password")
    public String processForgotPassword(@RequestParam("email") String email, Model model) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            model.addAttribute("error", "Bu email ilə istifadəçi tapılmadı.");
            return "auth/forgot-password";
        }

        String token = UUID.randomUUID().toString();
        user.setResetToken(token);
        userRepository.save(user);

        String resetLink = "http://localhost:8181/auth/reset-password?token=" + token;
        emailService.send(email, "Şifrəni sıfırlamaq üçün link: " + resetLink);

        model.addAttribute("message", "Sıfırlama linki email ünvanınıza göndərildi.");
        return "auth/forgot-password";
    }

    // ✅ Şifrəni sıfırlamaq formu
    @GetMapping("/reset-password")
    public String showResetPasswordForm(@RequestParam("token") String token, Model model) {
        model.addAttribute("token", token);
        return "auth/reset-password";
    }

    // ✅ Yeni şifrəni qəbul etmək
    @PostMapping("/reset-password")
    public String processResetPassword(@RequestParam("token") String token,
                                       @RequestParam("password") String password,
                                       Model model) {
        User user = userRepository.findByResetToken(token);
        if (user == null) {
            model.addAttribute("error", "Token etibarsızdır.");
            return "auth/reset-password";
        }

        user.setPassword(passwordEncoder.encode(password));
        user.setResetToken(null);
        userRepository.save(user);

        return "redirect:/auth/login?resetSuccess=true";
    }
}