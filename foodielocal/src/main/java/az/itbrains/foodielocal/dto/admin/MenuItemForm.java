package az.itbrains.foodielocal.dto.admin;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuItemForm {

    private Long id; // update zamanı lazım olur

    @NotNull
    private Long restaurantId; // hansı restorana aid olduğunu göstərir

    @NotBlank
    private String category; // Qəlyanaltılar, Şorbalar, Əsas yeməklər, Desertlər, İçkilər

    @NotBlank
    private String nameAz;

    @NotBlank
    private String nameEn;

    @NotBlank
    private String nameRu;

    private BigDecimal price; // qiymət optional ola bilər

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getRestaurantId() { return restaurantId; }
    public void setRestaurantId(Long restaurantId) { this.restaurantId = restaurantId; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getNameAz() { return nameAz; }
    public void setNameAz(String nameAz) { this.nameAz = nameAz; }

    public String getNameEn() { return nameEn; }
    public void setNameEn(String nameEn) { this.nameEn = nameEn; }

    public String getNameRu() { return nameRu; }
    public void setNameRu(String nameRu) { this.nameRu = nameRu; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}