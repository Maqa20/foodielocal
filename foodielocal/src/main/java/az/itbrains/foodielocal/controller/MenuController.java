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
@RequestMapping("/restaurants")
public class MenuController {

    private final MenuService menuService;
    private final RestaurantService restaurantService;

    public MenuController(MenuService menuService, RestaurantService restaurantService) {
        this.menuService = menuService;
        this.restaurantService = restaurantService;
    }

    @GetMapping("/{restaurantId}/menu")
    public String viewMenu(@PathVariable Long restaurantId, Model model) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        List<Menu> menuItems = menuService.findByRestaurantId(restaurantId);
        model.addAttribute("restaurant", restaurant);
        model.addAttribute("menuItems", menuItems);
        return "restaurants/menu"; // templates/restaurants/menu.html
    }

    @GetMapping("/{restaurantId}/menu/create")
    public String showCreateForm(@PathVariable Long restaurantId, Model model) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        Menu menuItem = new Menu();
        menuItem.setRestaurant(restaurant);
        model.addAttribute("menuItem", menuItem);
        return "restaurants/menu-create";
    }


    @PostMapping("/{restaurantId}/menu/create")
    public String createMenuItem(@PathVariable Long restaurantId, @ModelAttribute Menu menuItem) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        menuItem.setRestaurant(restaurant);
        menuService.save(menuItem);
        return "redirect:/restaurants/" + restaurantId + "/menu";
    }

    @GetMapping("/{restaurantId}/menu/edit/{id}")
    public String showEditForm(@PathVariable Long restaurantId, @PathVariable Long id, Model model) {
        Menu menuItem = menuService.findById(id);
        model.addAttribute("menuItem", menuItem);
        return "restaurants/menu-edit";
    }


    @PostMapping("/{restaurantId}/menu/edit/{id}")
    public String updateMenuItem(@PathVariable Long restaurantId, @PathVariable Long id, @ModelAttribute Menu menuItem) {
        Menu existing = menuService.findById(id);
        menuItem.setId(existing.getId());
        menuItem.setRestaurant(existing.getRestaurant());
        menuService.save(menuItem);
        return "redirect:/restaurants/" + restaurantId + "/menu";
    }

    @GetMapping("/{restaurantId}/menu/delete/{id}")
    public String deleteMenuItem(@PathVariable Long restaurantId, @PathVariable Long id) {
        menuService.deleteById(id);
        return "redirect:/restaurants/" + restaurantId + "/menu";
    }
}