package az.itbrains.foodielocal.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantForm {
    private Long id;
    private String name;
    private String address;
    private String imageUrl;
    private String description;
    private String cuisine;
    private String priceRange;
    private Double rating;
    private String openingHours;
    private String phone;
    private Long ownerId;
}