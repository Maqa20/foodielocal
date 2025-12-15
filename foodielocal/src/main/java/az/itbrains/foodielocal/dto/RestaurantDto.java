package az.itbrains.foodielocal.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantDto {
    private Long id;
    private String name;
    private String address;
    private String phone;
    private String imageUrl;
    private String cuisine;
    private String description;
    private String priceRange;
    private Double rating;
    private String openingHours;
}