package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Menu;
import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.MenuService;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/menu")
public class MenuController {

    private final MenuService menuItemService;
    private final RestaurantService restaurantService;

    public MenuController(MenuService menuItemService, RestaurantService restaurantService) {
        this.menuItemService = menuItemService;
        this.restaurantService = restaurantService;
    }

    @GetMapping("/{restaurantId}")
    public String viewMenu(@PathVariable Long restaurantId, Model model) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        List<Menu> menuItems = menuItemService.findByRestaurantId(restaurantId);
        model.addAttribute("restaurant", restaurant);
        model.addAttribute("menuItems", menuItems);
        return "menu/list"; // templates/menu/list.html
    }

    @GetMapping("/create/{restaurantId}")
    public String showCreateForm(@PathVariable Long restaurantId, Model model) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        Menu menuItem = new Menu();
        menuItem.setRestaurant(restaurant);
        model.addAttribute("menuItem", menuItem);
        return "menu/create"; // templates/menu/create.html
    }

    @PostMapping("/create/{restaurantId}")
    public String createMenuItem(@PathVariable Long restaurantId,
                                 @ModelAttribute Menu menuItem) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        menuItem.setRestaurant(restaurant);
        menuItemService.save(menuItem);
        return "redirect:/menu/" + restaurantId;
    }
}