package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Menu;
import az.itbrains.foodielocal.repository.MenuRepository;
import az.itbrains.foodielocal.service.MenuService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {

    private final MenuRepository menuRepository;

    public MenuServiceImpl(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @Override
    public Menu save(Menu menuItem) {
        return menuRepository.save(menuItem);
    }

    @Override
    public List<Menu> findByRestaurantId(Long restaurantId) {
        return menuRepository.findByRestaurant_Id(restaurantId);
    }

    @Override
    public Menu findById(Long id) {
        return menuRepository.findById(id).orElseThrow(() -> new RuntimeException("Menu item not found with id: " + id));
    }

    @Override
    public void deleteById(Long id) {
        menuRepository.deleteById(id);
    }

    @Override
    public List<Menu> findPopularItems() {
        return menuRepository.findByIsPopularTrue();
    }

    @Override
    public List<Menu> findByCategory(String category) {
        return menuRepository.findByCategory(category);
    }

    @Override
    public List<Menu> findByPriceRange(Double minPrice, Double maxPrice) {
        return menuRepository.findByPriceBetween(minPrice, maxPrice);
    }

    @Override
    public List<Menu> findAll() {
        return menuRepository.findAll();
    }

    @Override
    public List<Menu> findAllSorted() {
        return menuRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }
}