package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Review;
import java.util.List;

public interface ReviewService {
    Review save(Review review);
    List<Review> getReviewsByRestaurant(Long restaurantId);
    List<Review> findAll();
    Review findById(Long id);
    void deleteById(Long id);
}