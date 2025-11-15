package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/restaurants")
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping
    public String listRestaurants(Model model) {
        List<Restaurant> restaurants = restaurantService.findAll();
        model.addAttribute("restaurants", restaurants);
        return "restaurants/list";
    }

    @GetMapping("/{id}")
    public String viewRestaurant(@PathVariable Long id, Model model) {
        Restaurant restaurant = restaurantService.findById(id);
        model.addAttribute("restaurant", restaurant);
        return "restaurants/details";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("restaurant", new Restaurant());
        return "restaurants/create";
    }

    @PostMapping("/create")
    public String createRestaurant(@ModelAttribute Restaurant restaurant) {
        restaurantService.save(restaurant);
        return "redirect:/restaurants";
    }
}