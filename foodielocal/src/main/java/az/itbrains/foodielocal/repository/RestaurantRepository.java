package az.itbrains.foodielocal.repository;

import az.itbrains.foodielocal.model.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    @Query("SELECT r FROM Restaurant r ORDER BY RANDOM()")
    Page<Restaurant> findRandomRestaurants(Pageable pageable);
    List<Restaurant> findAllByOrderByIdAsc();
    List<Restaurant> findAllByOrderByNameAsc();
}