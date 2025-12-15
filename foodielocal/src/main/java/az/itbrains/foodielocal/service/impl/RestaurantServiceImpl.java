package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.repository.RestaurantRepository;
import az.itbrains.foodielocal.service.RestaurantService;
import org.springframework.data.domain.Sort;
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

    // ✅ Restoranları id ilə sıralanmış qaytar
    @Override
    public List<Restaurant> findAll() {
        return restaurantRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    // ✅ Random restoranlar
    @Override
    public List<Restaurant> getRandomRestaurants(int count) {
        List<Restaurant> all = restaurantRepository.findAll();
        Collections.shuffle(all);
        return all.stream().limit(count).toList();
    }

    // ✅ Seed ilə random restoranlar
    @Override
    public List<Restaurant> getSeededRandomRestaurants(int count, long seed) {
        List<Restaurant> all = restaurantRepository.findAll();
        Collections.shuffle(all, new Random(seed));
        return all.stream().limit(count).toList();
    }

    // ✅ Restoranları id ilə sıralanmış qaytar (əlavə metod)
    @Override
    public List<Restaurant> findAllSortedById() {
        return restaurantRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    // ✅ Restoranı id ilə tap
    @Override
    public Restaurant findById(Long id) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(id);
        return restaurant.orElse(null);
    }

    // ✅ Restoranı yadda saxla
    @Override
    public Restaurant save(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    // ✅ Restoranı sil
    @Override
    public void deleteById(Long id) {
        restaurantRepository.deleteById(id);
    }
}