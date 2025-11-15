package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.MenuItem;
import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.MenuItemService;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/menu")
public class MenuItemController {

    private final MenuItemService menuItemService;
    private final RestaurantService restaurantService;

    public MenuItemController(MenuItemService menuItemService, RestaurantService restaurantService) {
        this.menuItemService = menuItemService;
        this.restaurantService = restaurantService;
    }

    // 🔹 Restoranın menyusunu göstər
    @GetMapping("/{restaurantId}")
    public String viewMenu(@PathVariable Long restaurantId, Model model) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        List<MenuItem> menuItems = menuItemService.findByRestaurantId(restaurantId);
        model.addAttribute("restaurant", restaurant);
        model.addAttribute("menuItems", menuItems);
        return "menu/list"; // templates/menu/list.html
    }

    // 🔹 Yeni menyu item formu
    @GetMapping("/create/{restaurantId}")
    public String showCreateForm(@PathVariable Long restaurantId, Model model) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        MenuItem menuItem = new MenuItem();
        menuItem.setRestaurant(restaurant);
        model.addAttribute("menuItem", menuItem);
        return "menu/create"; // templates/menu/create.html
    }

    // 🔹 Yeni menyu item-i yadda saxla
    @PostMapping("/create/{restaurantId}")
    public String createMenuItem(@PathVariable Long restaurantId,
                                 @ModelAttribute MenuItem menuItem) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        menuItem.setRestaurant(restaurant);
        menuItemService.save(menuItem);
        return "redirect:/menu/" + restaurantId;
    }
}