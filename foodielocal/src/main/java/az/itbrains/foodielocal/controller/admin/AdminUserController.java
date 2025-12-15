package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.dto.admin.UserForm;
import az.itbrains.foodielocal.model.Role;
import az.itbrains.foodielocal.model.User;
import az.itbrains.foodielocal.repository.RoleRepository;
import az.itbrains.foodielocal.repository.UserRepository;
import az.itbrains.foodielocal.repository.RestaurantRepository;
import az.itbrains.foodielocal.repository.ReservationRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Controller
@RequestMapping("/admin/users")
public class AdminUserController {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final RestaurantRepository restaurantRepository;
    private final ReservationRepository reservationRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminUserController(UserRepository userRepository,
                               RoleRepository roleRepository,
                               RestaurantRepository restaurantRepository,
                               ReservationRepository reservationRepository,
                               PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.restaurantRepository = restaurantRepository;
        this.reservationRepository = reservationRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public String listUsers(Model model) {
        model.addAttribute("users", userRepository.findAll());
        model.addAttribute("roles", roleRepository.findAll()); // ✅ rol siyahısı
        model.addAttribute("restaurants", restaurantRepository.findAll());
        model.addAttribute("reservations", reservationRepository.findAll());
        model.addAttribute("user", new UserForm()); // form üçün boş obyekt
        return "admin/admin";
    }

    // Yeni istifadəçi əlavə et
    @PostMapping("/create")
    public String createUser(@ModelAttribute("user") @Valid UserForm form,
                             BindingResult result,
                             Model model) {
        if (result.hasErrors()) {
            return listUsers(model);
        }

        Role role = roleRepository.findByName(form.getRole()).orElse(null);
        if (role == null) {
            model.addAttribute("error", "Rol tapılmadı");
            return listUsers(model);
        }

        User user = new User();
        user.setFullName(form.getFullName());
        user.setEmail(form.getEmail());
        user.setPassword(passwordEncoder.encode(form.getPassword()));
        user.setRoles(new HashSet<>(List.of(role))); // ✅ mutable
        user.setEnabled(form.isEnabled());

        userRepository.save(user);

        model.addAttribute("success", true);
        model.addAttribute("action", "create");
        return listUsers(model);
    }

    // İstifadəçi yenilə
    @PostMapping("/update/{id}")
    public String updateUser(@PathVariable Long id,
                             @ModelAttribute("user") UserForm form,
                             Model model) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            model.addAttribute("error", true);
            return listUsers(model);
        }

        user.setFullName(form.getFullName());
        user.setEmail(form.getEmail());

        if (form.getPassword() != null && !form.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(form.getPassword()));
        }

        Role role = roleRepository.findByName(form.getRole()).orElse(null);
        if (role != null) {
            user.setRoles(new HashSet<>(List.of(role))); // ✅ mutable
        }

        user.setEnabled(form.isEnabled());
        userRepository.save(user);

        model.addAttribute("success", true);
        model.addAttribute("action", "update");
        return listUsers(model);
    }

    // İstifadəçi sil
    @PostMapping("/{id}/delete")
    public String deleteUser(@PathVariable Long id, Model model) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.getRoles().clear(); // ✅ əlaqələri təmizlə
            userRepository.delete(user); // indi problemsiz silinir
            model.addAttribute("success", true);
            model.addAttribute("action", "delete");
        } else {
            model.addAttribute("error", true);
        }
        return listUsers(model);
    }
}