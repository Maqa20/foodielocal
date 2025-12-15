package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.model.MenuItem;
import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.repository.MenuItemRepository;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@Controller
@RequestMapping("/admin")
public class AdminMenuItemController {

    private final MenuItemRepository menuItemRepository;
    private final RestaurantService restaurantService;

    public AdminMenuItemController(MenuItemRepository menuItemRepository,
                                   RestaurantService restaurantService) {
        this.menuItemRepository = menuItemRepository;
        this.restaurantService = restaurantService;
    }

    // ✅ Yarat
    @PostMapping("/menu-items/create")
    public String create(@RequestParam Long restaurantId,
                         @RequestParam String category,
                         @RequestParam String name,
                         @RequestParam String description,
                         @RequestParam(required = false) BigDecimal price) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        if (restaurant == null) {
            return "redirect:/admin?error=restaurant_not_found";
        }
        MenuItem item = new MenuItem();
        item.setRestaurant(restaurant);
        item.setCategory(category);
        item.setName(name);
        item.setDescription(description);
        item.setPrice(price);
        menuItemRepository.save(item);
        return "redirect:/admin?success";
    }

    // ✅ Yenilə
    @PostMapping("/menu-items/update/{id}")
    public String update(@PathVariable Long id,
                         @RequestParam Long restaurantId,
                         @RequestParam String category,
                         @RequestParam String name,
                         @RequestParam String description,
                         @RequestParam(required = false) BigDecimal price) {
        MenuItem item = menuItemRepository.findById(id).orElse(null);
        Restaurant restaurant = restaurantService.findById(restaurantId);
        if (item == null || restaurant == null) {
            return "redirect:/admin?error=not_found";
        }
        item.setRestaurant(restaurant);
        item.setCategory(category);
        item.setName(name);
        item.setDescription(description);
        item.setPrice(price);
        menuItemRepository.save(item);
        return "redirect:/admin?success";
    }

    // ✅ Sil
    @PostMapping("/menu-items/{id}/delete")
    public String delete(@PathVariable Long id) {
        if (menuItemRepository.existsById(id)) {
            menuItemRepository.deleteById(id);
        }
        return "redirect:/admin?success";
    }
}