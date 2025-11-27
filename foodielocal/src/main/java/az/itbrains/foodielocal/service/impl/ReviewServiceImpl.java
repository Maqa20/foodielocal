package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Review;
import az.itbrains.foodielocal.repository.ReviewRepository;
import az.itbrains.foodielocal.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public Review save(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getReviewsByRestaurant(Long restaurantId) {
        // düzəliş: findByRestaurant_Id istifadə olunur
        return reviewRepository.findByRestaurant_Id(restaurantId);
    }

    @Override
    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    @Override
    public Review findById(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        reviewRepository.deleteById(id);
    }
}