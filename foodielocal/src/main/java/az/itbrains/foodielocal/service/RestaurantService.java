package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Restaurant;
import java.util.List;

public interface RestaurantService {

    List<Restaurant> findAll();

    List<Restaurant> getRandomRestaurants(int count);

    List<Restaurant> getSeededRandomRestaurants(int count, long seed);

    Restaurant findById(Long id);

    Restaurant save(Restaurant restaurant);

    void deleteById(Long id);
}