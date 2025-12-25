package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.model.Review;
import az.itbrains.foodielocal.service.ReviewService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/admin/reviews")
public class AdminReviewController {

    private final ReviewService reviewService;

    public AdminReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/{id}/delete")
    public String deleteReview(@PathVariable Long id,
                               RedirectAttributes redirectAttributes) {
        Review review = reviewService.findById(id);
        if (review != null) {
            reviewService.deleteById(id);
            redirectAttributes.addFlashAttribute("message", "Rəy uğurla silindi!");
        } else {
            redirectAttributes.addFlashAttribute("message", "Xəta: rəy tapılmadı!");
        }
        return "redirect:/admin/restaurants";
    }
}