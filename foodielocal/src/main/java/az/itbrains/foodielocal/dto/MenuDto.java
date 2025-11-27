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
    private String name;
    private String description;
    private double price;
    private Long restaurantId;

}