package az.itbrains.foodielocal.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Hansi restorana aid oldugunu saxlayiriq
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;

    @Column(length = 100, nullable = false)
    private String category; // Starters, Soups, Main dishes, Desserts, Drinks

    @Column(length = 255, nullable = false)
    private String name; // Yeməyin adı (EN və ya default dil)

    @Column(columnDefinition = "TEXT")
    private String description; // Yeməyin təsviri

    @Column(precision = 6, scale = 2)
    private BigDecimal price; // istəyə bağlı, ola bilər null
}