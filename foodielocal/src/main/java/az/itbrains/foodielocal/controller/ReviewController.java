package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.model.Review;
import az.itbrains.foodielocal.service.RestaurantService;
import az.itbrains.foodielocal.service.ReviewService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;
    private final RestaurantService restaurantService;

    public ReviewController(ReviewService reviewService, RestaurantService restaurantService) {
        this.reviewService = reviewService;
        this.restaurantService = restaurantService;
    }

    @GetMapping("/create/{restaurantId}")
    public String showReviewForm(@PathVariable Long restaurantId, Model model) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        model.addAttribute("restaurant", restaurant);
        model.addAttribute("review", new Review());
        return "reviews/create"; // templates/reviews/create.html
    }

    @PostMapping("/create/{restaurantId}")
    public String submitReview(@PathVariable Long restaurantId,
                               @ModelAttribute Review review) {
        Restaurant restaurant = restaurantService.findById(restaurantId);
        review.setRestaurant(restaurant);
        reviewService.save(review);
        return "redirect:/restaurants/" + restaurantId;
    }
}