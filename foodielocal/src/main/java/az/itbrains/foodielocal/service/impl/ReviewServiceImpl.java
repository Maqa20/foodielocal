package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Review;
import az.itbrains.foodielocal.repository.ReviewRepository;
import az.itbrains.foodielocal.service.ReviewService;
import org.springframework.stereotype.Service;

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
}