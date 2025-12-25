package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Menu;
import java.util.List;

public interface MenuService {

    Menu save(Menu menuItem);
    Menu findById(Long id);
    List<Menu> findByRestaurantId(Long restaurantId);
    List<Menu> findPopularItems();
    List<Menu> findByCategory(String category);
    List<Menu> findByPriceRange(Double minPrice, Double maxPrice);
    List<Menu> findAll();
    List<Menu> findAllSorted();
    void deleteById(Long id);

}