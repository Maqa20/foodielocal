package az.itbrains.foodielocal.dto.admin;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuForm {
    private Long id;

    @NotBlank(message = "Yemək adı boş ola bilməz")
    private String nameAz;
    private String nameEn;
    private String nameRu;
    private String descriptionAz;
    private String descriptionEn;
    private String descriptionRu;
    @NotNull(message = "Qiymət boş ola bilməz")
    private Double price;
    private String category;
    private boolean isPopular;
    @NotNull(message = "Restoran seçilməlidir")
    private Long restaurantId;
}