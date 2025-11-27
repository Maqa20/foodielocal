package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Menu;
import az.itbrains.foodielocal.repository.MenuRepository;
import az.itbrains.foodielocal.service.MenuService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {

    private final MenuRepository menuItemRepository;

    public MenuServiceImpl(MenuRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @Override
    public Menu save(Menu menuItem) {
        return menuItemRepository.save(menuItem);
    }

    @Override
    public List<Menu> findByRestaurantId(Long restaurantId) {
        return menuItemRepository.findByRestaurantId(restaurantId);
    }
}