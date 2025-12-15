package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.model.Role;
import az.itbrains.foodielocal.repository.RoleRepository;
import az.itbrains.foodielocal.repository.UserRepository;
import az.itbrains.foodielocal.repository.RestaurantRepository;
import az.itbrains.foodielocal.repository.ReservationRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
@Controller
@RequestMapping("/admin/roles")
public class AdminRoleController {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final RestaurantRepository restaurantRepository;
    private final ReservationRepository reservationRepository;

    public AdminRoleController(RoleRepository roleRepository,
                               UserRepository userRepository,
                               RestaurantRepository restaurantRepository,
                               ReservationRepository reservationRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.restaurantRepository = restaurantRepository;
        this.reservationRepository = reservationRepository;
    }

    // ✅ Rolların siyahısı + digər modellər
    @GetMapping
    public String listRoles(Model model) {
        model.addAttribute("roles", roleRepository.findAll());
        model.addAttribute("role", new Role());

        model.addAttribute("users", userRepository.findAll());
        model.addAttribute("restaurants", restaurantRepository.findAll());
        model.addAttribute("reservations", reservationRepository.findAll());

        return "admin/admin"; // bütün tab-lar eyni səhifədə
    }

    @PostMapping("/create")
    public String createRole(@ModelAttribute("role") Role role, Model model) {
        roleRepository.save(role);
        model.addAttribute("success", true);
        return listRoles(model); // eyni admin səhifəsini render et
    }

    // ✅ Rol redaktə formu (modal üçün)
    @GetMapping("/edit/{id}")
    public String editRoleForm(@PathVariable Long id, Model model) {
        Role role = roleRepository.findById(id).orElse(null);
        if (role == null) {
            model.addAttribute("error", true);
            return listRoles(model);
        }
        model.addAttribute("role", role);
        model.addAttribute("roles", roleRepository.findAll());

        model.addAttribute("users", userRepository.findAll());
        model.addAttribute("restaurants", restaurantRepository.findAll());
        model.addAttribute("reservations", reservationRepository.findAll());

        return "admin/admin";
    }

    // ✅ Rol yenilə (redirect yox)
    @PostMapping("/edit/{id}")
    public String updateRole(@PathVariable Long id,
                             @ModelAttribute("role") Role form,
                             Model model) {
        Role role = roleRepository.findById(id).orElse(null);
        if (role == null) {
            model.addAttribute("error", true);
            return listRoles(model);
        }
        role.setName(form.getName());
        role.setDescription(form.getDescription());
        roleRepository.save(role);

        model.addAttribute("success", true);
        model.addAttribute("action", "update");
        return listRoles(model);
    }

    // ✅ Rol sil (redirect yox)
    @PostMapping("/{id}/delete")
    public String deleteRole(@PathVariable Long id, Model model) {
        if (roleRepository.existsById(id)) {
            roleRepository.deleteById(id);
            model.addAttribute("success", true);
            model.addAttribute("action", "delete");
        } else {
            model.addAttribute("error", true);
        }
        return listRoles(model);
    }
}