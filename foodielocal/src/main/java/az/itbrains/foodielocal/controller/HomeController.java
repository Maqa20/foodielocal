package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;
import java.util.Collections;

@Controller
public class HomeController {

    private final RestaurantService restaurantService;

    public HomeController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/")
    public String home(Model model) {

        long seed = LocalDate.now().toEpochDay(); 
        List<Restaurant> all = restaurantService.findAll();
        Collections.shuffle(all, new Random(seed));
        List<Restaurant> todaysRestaurants = all.stream().limit(3).toList();
        model.addAttribute("todaysRestaurants", todaysRestaurants);

        List<Restaurant> featuredRestaurants = restaurantService.getRandomRestaurants(4);
        model.addAttribute("featuredRestaurants", featuredRestaurants);

        model.addAttribute("restaurants", all);

        return "index";
    }
}