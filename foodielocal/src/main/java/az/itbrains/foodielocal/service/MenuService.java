package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Menu;

import java.util.List;

public interface MenuService {
    Menu save(Menu menuItem);
    List<Menu> findByRestaurantId(Long restaurantId);
}