package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Restaurant;

import java.util.List;

public interface RestaurantService {

    List<Restaurant> findAll();

    Restaurant findById(Long id);

    Restaurant save(Restaurant restaurant);

    void delete(Long id);




}