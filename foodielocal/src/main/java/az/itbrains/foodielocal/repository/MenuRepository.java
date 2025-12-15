package az.itbrains.foodielocal.repository;

import az.itbrains.foodielocal.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

    // Restorana görə menyu elementlərini tap
    List<Menu> findByRestaurantId(Long restaurantId);

    // Məşhur yeməkləri tap
    List<Menu> findByIsPopularTrue();

    // Kateqoriyaya görə menyu elementlərini tap (starter, main, dessert, drink)
    List<Menu> findByCategory(String category);

    // Qiymət aralığına görə menyu elementlərini tap
    List<Menu> findByPriceBetween(Double minPrice, Double maxPrice);
}