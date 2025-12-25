package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.model.Menu;
import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.MenuService;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin/menus")
public class AdminMenuController {

    private final MenuService menuService;
    private final RestaurantService restaurantService;

    public AdminMenuController(MenuService menuService, RestaurantService restaurantService) {
        this.menuService = menuService;this.restaurantService = restaurantService;
    }

    @GetMapping
    public String listMenus(Model model) {
        model.addAttribute("menus", menuService.findAllSorted()); // ID ASC
        model.addAttribute("restaurants", restaurantService.findAll());
        model.addAttribute("menu", new Menu());
        return "admin/admin";
    }

    @PostMapping("/create")
    public String createMenu(@ModelAttribute Menu menu, @RequestParam Long restaurantId) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        if (restaurant == null) {
            return "redirect:/admin?error=restaurant_not_found&section=menus";
        }
        menu.setId(null);
        menu.setRestaurant(restaurant);
        menuService.save(menu);
        return "redirect:/admin?success&action=menu-create";
    }

    @GetMapping("/edit/{id}")
    public String editMenu(@PathVariable Long id, Model model) {
        Menu menu = menuService.findById(id);
        model.addAttribute("menu", menu);
        model.addAttribute("menus", menuService.findAllSorted());
        model.addAttribute("restaurants", restaurantService.findAll());
        return "admin/admin";
    }

    @PostMapping("/update/{id}")
    public String updateMenu(@PathVariable Long id, @ModelAttribute Menu updated, @RequestParam Long restaurantId) {
        Menu menu = menuService.findById(id);
        Restaurant restaurant = restaurantService.findById(restaurantId);
        menu.setName(updated.getName());
        menu.setDescription(updated.getDescription());
        menu.setPrice(updated.getPrice());
        menu.setCategory(updated.getCategory());
        menu.setPopular(updated.isPopular());
        menu.setImageUrl(updated.getImageUrl());
        menu.setRestaurant(restaurant);
        menuService.save(menu);
        return "redirect:/admin?success&action=menu-update";
    }
    @PostMapping("/{id}/delete")
    public String deleteMenu(@PathVariable Long id) {
        menuService.deleteById(id);
        return "redirect:/admin?success&action=menu-delete";
    }
}