package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private MenuService menuService;

    @GetMapping
    public String admin(Model model) {
        model.addAttribute("users", userService.findAll());
        model.addAttribute("roles", roleService.findAll());
        model.addAttribute("restaurants", restaurantService.findAll());
        model.addAttribute("reservations", reservationService.findAll());
        model.addAttribute("reviews", reviewService.findAll());
        model.addAttribute("menus", menuService.findAll());

        return "admin/admin";
    }
}