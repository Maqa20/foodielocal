package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Menu;
import java.util.List;

public interface MenuService {

    // Yeni menyu item əlavə et və ya mövcudunu redaktə et
    Menu save(Menu menuItem);

    // Restorana görə menyu elementlərini gətir
    List<Menu> findByRestaurantId(Long restaurantId);

    // ID-yə görə menyu item tap
    Menu findById(Long id);

    // ID-yə görə menyu item sil
    void deleteById(Long id);

    // Məşhur yeməkləri gətir
    List<Menu> findPopularItems();

    // Kateqoriyaya görə menyu elementlərini gətir (starter, main, dessert, drink)
    List<Menu> findByCategory(String category);

    // Qiymət aralığına görə menyu elementlərini gətir
    List<Menu> findByPriceRange(Double minPrice, Double maxPrice);
}