package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.model.Menu;
import az.itbrains.foodielocal.repository.MenuRepository;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin/menus")
public class AdminMenuController {

    private final MenuRepository menuRepository;

    public AdminMenuController(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @GetMapping
    public String menuPage(Model model) {
        model.addAttribute("menus", menuRepository.findAll());
        model.addAttribute("menu", new Menu()); // və ya MenuForm
        return "admin/admin";
    }

    @PostMapping("/create")
    public String createMenu(@ModelAttribute("menu") Menu menu) {
        menuRepository.save(menu);
        return "redirect:/admin/menus";
    }

    @GetMapping("/edit/{id}")
    public String editMenu(@PathVariable Long id, Model model) {
        Menu menu = menuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Menyu tapılmadı"));
        model.addAttribute("menu", menu);
        model.addAttribute("menus", menuRepository.findAll());
        return "admin/admin";
    }

    @PostMapping("/update/{id}")
    public String updateMenu(@PathVariable Long id, @ModelAttribute("menu") Menu updated) {
        Menu menu = menuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Menyu tapılmadı"));
        menu.setName(updated.getName());
        menu.setPrice(updated.getPrice());
        menu.setCategory(updated.getCategory());
        menuRepository.save(menu);
        return "redirect:/admin/menus";
    }

    @GetMapping("/delete/{id}")
    public String deleteMenu(@PathVariable Long id) {
        menuRepository.deleteById(id);
        return "redirect:/admin/menus";
    }
}