package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.dto.admin.RestaurantForm;
import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.RestaurantService;
import az.itbrains.foodielocal.service.ReservationService;
import az.itbrains.foodielocal.service.UserService;
import az.itbrains.foodielocal.service.RoleService;
import az.itbrains.foodielocal.service.ReviewService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/admin/restaurants")
public class AdminRestaurantController {

    private final RestaurantService restaurantService;
    private final ReservationService reservationService;
    private final UserService userService;
    private final RoleService roleService;
    private final ReviewService reviewService;

    public AdminRestaurantController(RestaurantService restaurantService,
                                     ReservationService reservationService,
                                     UserService userService,
                                     RoleService roleService,
                                     ReviewService reviewService) {
        this.restaurantService = restaurantService;
        this.reservationService = reservationService;
        this.userService = userService;
        this.roleService = roleService;
        this.reviewService = reviewService;
    }

    // ✅ Restoran siyahısı + digər panel məlumatları
    @GetMapping
    public String listRestaurants(Model model,
                                  @ModelAttribute("message") String message) {
        model.addAttribute("restaurants", restaurantService.findAllSortedById());
        model.addAttribute("restaurantForm", new RestaurantForm()); // 🔑 form binding üçün lazımdır

        // digər panellərin məlumatlarını da əlavə et
        model.addAttribute("reservations", reservationService.findAll());
        model.addAttribute("users", userService.findAll());
        model.addAttribute("roles", roleService.findAll());
        model.addAttribute("reviews", reviewService.findAll());

        // mesaj varsa modelə əlavə et
        if (message != null && !message.isEmpty()) {
            model.addAttribute("alertMessage", message);
        }

        return "admin/admin"; // ümumi admin panel template
    }

    // ✅ Yeni restoran əlavə et
    @PostMapping("/create")
    public String createRestaurant(@ModelAttribute("restaurantForm") RestaurantForm form,
                                   RedirectAttributes redirectAttributes) {
        Restaurant restaurant = new Restaurant();
        fillRestaurantFromForm(restaurant, form);
        restaurantService.save(restaurant);
        redirectAttributes.addFlashAttribute("message", "Restoran uğurla əlavə olundu!");
        return "redirect:/admin/restaurants";
    }

    // ✅ Restoran yenilə
    @PostMapping("/update/{id}")
    public String updateRestaurant(@PathVariable Long id,
                                   @ModelAttribute("restaurantForm") RestaurantForm form,
                                   RedirectAttributes redirectAttributes) {
        Restaurant restaurant = restaurantService.findById(id);
        if (restaurant == null) {
            redirectAttributes.addFlashAttribute("message", "Xəta: restoran tapılmadı!");
            return "redirect:/admin/restaurants";
        }
        fillRestaurantFromForm(restaurant, form);
        restaurantService.save(restaurant);
        redirectAttributes.addFlashAttribute("message", "Restoran uğurla yeniləndi!");
        return "redirect:/admin/restaurants";
    }

    // ✅ Restoran sil
    @PostMapping("/{id}/delete")
    public String deleteRestaurant(@PathVariable Long id,
                                   RedirectAttributes redirectAttributes) {
        Restaurant restaurant = restaurantService.findById(id);
        if (restaurant != null) {
            restaurantService.deleteById(id);
            redirectAttributes.addFlashAttribute("message", "Restoran uğurla silindi!");
        } else {
            redirectAttributes.addFlashAttribute("message", "Xəta: restoran tapılmadı!");
        }
        return "redirect:/admin/restaurants";
    }

    // 🔧 Helper metod
    private void fillRestaurantFromForm(Restaurant restaurant, RestaurantForm form) {
        restaurant.setName(form.getName());
        restaurant.setAddress(form.getAddress());
        restaurant.setImageUrl(form.getImageUrl());
        restaurant.setDescription(form.getDescription());
        restaurant.setCuisine(form.getCuisine());
        restaurant.setPriceRange(form.getPriceRange());
        restaurant.setRating(form.getRating());
        restaurant.setOpeningHours(form.getOpeningHours());
        restaurant.setPhone(form.getPhone());
    }
}