package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.repository.RestaurantRepository;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public RestaurantServiceImpl(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public List<Restaurant> findAll() {
        return restaurantRepository.findAll();
    }

    @Override
    public List<Restaurant> getRandomRestaurants(int count) {
        List<Restaurant> all = restaurantRepository.findAll();
        Collections.shuffle(all);
        return all.stream().limit(count).toList();
    }

    @Override
    public List<Restaurant> getSeededRandomRestaurants(int count, long seed) {
        List<Restaurant> all = restaurantRepository.findAll();
        Collections.shuffle(all, new Random(seed));
        return all.stream().limit(count).toList();
    }

    @Override
    public Restaurant findById(Long id) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(id);
        return restaurant.orElse(null);
    }

    @Override
    public Restaurant save(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteById(Long id) {
        restaurantRepository.deleteById(id);
    }
}