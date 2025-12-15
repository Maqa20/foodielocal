package az.itbrains.foodielocal.repository;

import az.itbrains.foodielocal.model.MenuItem;
import az.itbrains.foodielocal.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    List<MenuItem> findByRestaurant(Restaurant restaurant);

    List<MenuItem> findByRestaurantId(Long restaurantId);

    // Köhnə: findByRestaurantIdAndCategoryOrderByNameAzAsc
    // Yeni: sadəcə name ilə sortlama
    List<MenuItem> findByRestaurantIdAndCategoryOrderByNameAsc(Long restaurantId, String category);
}