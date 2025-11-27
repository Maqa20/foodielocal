package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.dto.admin.UserForm;
import az.itbrains.foodielocal.model.Role;
import az.itbrains.foodielocal.model.User;
import az.itbrains.foodielocal.repository.RoleRepository;
import az.itbrains.foodielocal.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/admin/users")
public class AdminUserController {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminUserController(UserRepository userRepository,
                               RoleRepository roleRepository,
                               PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public String userPage(Model model) {
        model.addAttribute("users", userRepository.findAll());
        model.addAttribute("user", new UserForm());
        model.addAttribute("allRoles", roleRepository.findAll());
        return "admin/admin"; // yalnız bir HTML faylı
    }


    @PostMapping("/create")
    public String createUser(@ModelAttribute("user") @Valid UserForm form,
                             BindingResult result,
                             Model model) {
        if (result.hasErrors()) {
            model.addAttribute("users", userRepository.findAll());
            model.addAttribute("allRoles", roleRepository.findAll());
            return "admin/admin";
        }

        Role role = roleRepository.findByName("ROLE_" + form.getRole())
                .orElseThrow(() -> new RuntimeException("Rol tapılmadı"));

        User user = new User();
        user.setFullName(form.getFullName());
        user.setEmail(form.getEmail());
        user.setPassword(passwordEncoder.encode(form.getPassword()));
        user.setRoles(Set.of(role));
        user.setEnabled(true);

        userRepository.save(user);
        return "redirect:/admin/users";
    }

    // ✅ Redaktə üçün formu doldur
    @GetMapping("/edit/{id}")
    public String editUser(@PathVariable Long id, Model model) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("İstifadəçi tapılmadı"));

        UserForm form = new UserForm();
        form.setId(user.getId());
        form.setFullName(user.getFullName());
        form.setEmail(user.getEmail());
        form.setRole(user.getRoles().stream()
                .findFirst()
                .map(role -> role.getName().replace("ROLE_", ""))
                .orElse("USER"));

        model.addAttribute("user", form);
        model.addAttribute("users", userRepository.findAll());
        model.addAttribute("allRoles", roleRepository.findAll());
        return "admin/admin";
    }

    // ✅ Redaktə olunmuş istifadəçini yadda saxla
    @PostMapping("/update/{id}")
    public String updateUser(@PathVariable Long id,
                             @ModelAttribute("user") UserForm form) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("İstifadəçi tapılmadı"));

        user.setFullName(form.getFullName());
        user.setEmail(form.getEmail());

        if (!form.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(form.getPassword()));
        }

        Role role = roleRepository.findByName("ROLE_" + form.getRole())
                .orElseThrow(() -> new RuntimeException("Rol tapılmadı"));
        user.setRoles(Set.of(role));

        userRepository.save(user);
        return "redirect:/admin/users";
    }

    // ✅ İstifadəçi sil
    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "redirect:/admin/users";
    }
}