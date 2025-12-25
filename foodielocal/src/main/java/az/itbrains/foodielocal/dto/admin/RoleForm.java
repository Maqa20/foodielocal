package az.itbrains.foodielocal.dto.admin;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleForm {

    private Long id;

    @NotBlank(message = "Role adı boş ola bilməz")
    private String name;

    private String description;
}