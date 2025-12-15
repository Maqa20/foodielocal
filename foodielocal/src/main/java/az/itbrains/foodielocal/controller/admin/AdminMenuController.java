package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.model.Menu;
import az.itbrains.foodielocal.service.MenuService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin/menus")
public class AdminMenuController {

    private final MenuService menuService;

    public AdminMenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    // ✅ Menyu siyahısı səhifəsi
    @GetMapping
    public String menuPage(Model model) {
        model.addAttribute("menus", menuService.findPopularItems()); // məşhur yeməklər
        model.addAttribute("allMenus", menuService.findByRestaurantId(null)); // bütün menyular
        model.addAttribute("menu", new Menu());
        return "admin/admin"; // templates/admin/admin.html
    }

    // ✅ Yeni menyu əlavə et
    @PostMapping("/create")
    public String createMenu(@ModelAttribute("menu") Menu menu) {
        menuService.save(menu);
        return "redirect:/admin/menus";
    }

    // ✅ Menyu redaktə formu
    @GetMapping("/edit/{id}")
    public String editMenu(@PathVariable Long id, Model model) {
        Menu menu = menuService.findById(id);
        model.addAttribute("menu", menu);
        model.addAttribute("menus", menuService.findByRestaurantId(menu.getRestaurant().getId()));
        return "admin/admin";
    }

    // ✅ Menyu yenilə
    @PostMapping("/update/{id}")
    public String updateMenu(@PathVariable Long id, @ModelAttribute("menu") Menu updated) {
        Menu menu = menuService.findById(id);
        menu.setName(updated.getName());
        menu.setDescription(updated.getDescription());
        menu.setPrice(updated.getPrice());
        menu.setCategory(updated.getCategory());
        menu.setPopular(updated.isPopular());
        menu.setImageUrl(updated.getImageUrl());
        menuService.save(menu);
        return "redirect:/admin/menus";
    }

    // ✅ Menyu sil
    @GetMapping("/delete/{id}")
    public String deleteMenu(@PathVariable Long id) {
        menuService.deleteById(id);
        return "redirect:/admin/menus";
    }
}