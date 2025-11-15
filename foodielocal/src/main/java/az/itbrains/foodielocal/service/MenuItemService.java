package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.MenuItem;

import java.util.List;

public interface MenuItemService {
    MenuItem save(MenuItem menuItem);
    List<MenuItem> findByRestaurantId(Long restaurantId);
}