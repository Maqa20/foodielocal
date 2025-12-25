package az.itbrains.foodielocal.repository;

import az.itbrains.foodielocal.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
    List<Menu> findByRestaurant_Id(Long restaurantId);
    List<Menu> findByIsPopularTrue();
    List<Menu> findByCategory(String category);
    List<Menu> findByPriceBetween(Double minPrice, Double maxPrice);
    List<Menu> findAllByOrderByIdAsc();
}