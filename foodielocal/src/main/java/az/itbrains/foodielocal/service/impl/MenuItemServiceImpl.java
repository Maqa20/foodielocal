package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.MenuItem;
import az.itbrains.foodielocal.repository.MenuItemRepository;
import az.itbrains.foodielocal.service.MenuItemService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemServiceImpl implements MenuItemService {

    private final MenuItemRepository menuItemRepository;

    public MenuItemServiceImpl(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @Override
    public MenuItem save(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }

    @Override
    public List<MenuItem> findByRestaurantId(Long restaurantId) {
        return menuItemRepository.findByRestaurantId(restaurantId);
    }
}