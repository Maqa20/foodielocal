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

    // ✅ Review formunu açmaq (GET /reviews)
    @GetMapping
    public String showReviewForm(Model model) {
        model.addAttribute("restaurants", restaurantService.findAll());
        model.addAttribute("review", new Review());
        return "reviews/reviews"; // Thymeleaf template
    }

    // ✅ Review göndərmək (POST /reviews)
    @PostMapping
    public String submitReview(@ModelAttribute Review review, Model model) {

        if (review.getRestaurant() == null || review.getRestaurant().getId() == null) {
            model.addAttribute("error", "Restaurant not selected");
            model.addAttribute("restaurants", restaurantService.findAll());
            return "reviews/reviews";
        }

        Long restaurantId = review.getRestaurant().getId();
        Restaurant restaurant = restaurantService.findById(restaurantId);
        review.setRestaurant(restaurant);

        // Review-u DB-yə yazırıq
        reviewService.save(review);

        // uğur mesajı əlavə et və formu təmizlə
        model.addAttribute("success", "Review submitted successfully!");
        model.addAttribute("restaurants", restaurantService.findAll());
        model.addAttribute("review", new Review());

        return "reviews/reviews"; // redirect yoxdur, eyni səhifədə qalır
    }
}