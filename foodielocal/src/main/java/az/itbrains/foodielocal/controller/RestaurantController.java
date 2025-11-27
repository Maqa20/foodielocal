package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.RestaurantService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.BindingResult;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/restaurants")
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    // Restoranların siyahısı
    @GetMapping
    public String listRestaurants(Model model) {
        List<Restaurant> restaurants = restaurantService.findAll();
        model.addAttribute("restaurants", restaurants);
        return "restaurants/restaurants"; // restaurants.html
    }

    @GetMapping("/{id}")
    public String showRestaurantDetails(@PathVariable Long id, Model model) {
        Restaurant restaurant = restaurantService.findById(id);

        if (restaurant == null) {
            restaurant = new Restaurant();
        }

        if (restaurant.getSignatureDishes() == null) {
            restaurant.setSignatureDishes(new ArrayList<>());
        }

        model.addAttribute("restaurant", restaurant);
        return "restaurants/detail";
    }

    // Restoran yaratmaq formu
    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("restaurant", new Restaurant());
        return "restaurants/create";
    }

    @PostMapping("/create")
    public String createRestaurant(@Valid @ModelAttribute Restaurant restaurant,
                                   BindingResult result,
                                   Model model) {
        if (result.hasErrors()) {
            model.addAttribute("restaurant", restaurant);
            return "restaurants/create";
        }
        restaurantService.save(restaurant);
        return "redirect:/restaurants";
    }

    // Restoran redaktə formu
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Restaurant restaurant = restaurantService.findById(id);
        model.addAttribute("restaurant", restaurant);
        return "restaurants/edit";
    }

    @PostMapping("/edit/{id}")
    public String updateRestaurant(@PathVariable Long id,
                                   @Valid @ModelAttribute Restaurant restaurant,
                                   BindingResult result,
                                   Model model) {
        if (result.hasErrors()) {
            model.addAttribute("restaurant", restaurant);
            return "restaurants/edit";
        }
        restaurant.setId(id);
        restaurantService.save(restaurant);
        return "redirect:/restaurants";
    }

    // Restoran silmək
    @GetMapping("/delete/{id}")
    public String deleteRestaurant(@PathVariable Long id) {
        restaurantService.deleteById(id);
        return "redirect:/restaurants";
    }
}