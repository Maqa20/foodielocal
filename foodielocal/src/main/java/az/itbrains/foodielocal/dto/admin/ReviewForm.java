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
public class ReviewForm {
    private Long id;

    @NotBlank(message = "Ad boş ola bilməz")
    private String authorName;

    @NotBlank(message = "Şərh boş ola bilməz")
    private String comment;

    @NotNull(message = "Reytinq boş ola bilməz")
    private Integer rating;

    @NotNull(message = "Restoran seçilməlidir")
    private Long restaurantId;

    private boolean approved;
}