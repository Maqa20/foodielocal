package az.itbrains.foodielocal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "restaurants")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Restoran adı boş ola bilməz")
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank(message = "Ünvan boş ola bilməz")
    @Column(name = "address", nullable = false)
    private String address;

    @NotBlank(message = "Şəkil linki boş ola bilməz")
    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "description")
    private String description;

    @Column(name = "long_description", columnDefinition = "TEXT")
    private String longDescription;

    @Column(name = "cuisine")
    private String cuisine;

    @Column(name = "price_range")
    private String priceRange;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "opening_hours")
    private String openingHours;

    // ✅ Burada əlavə et
    @Column(name = "phone")
    private String phone;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Menu> menuItems;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Dish> signatureDishes;
}