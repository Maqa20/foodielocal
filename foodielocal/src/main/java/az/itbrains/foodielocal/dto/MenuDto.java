package az.itbrains.foodielocal.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuDto {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String category;
    private boolean isPopular;
    private Long restaurantId;
}

