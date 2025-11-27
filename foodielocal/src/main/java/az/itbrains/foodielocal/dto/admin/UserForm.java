package az.itbrains.foodielocal.dto.admin;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserForm {

    private Long id;

    @NotBlank(message = "Ad soyad boş ola bilməz")
    private String fullName;

    @Email(message = "Email düzgün formatda olmalıdır")
    @NotBlank(message = "Email boş ola bilməz")
    private String email;

    @NotBlank(message = "Şifrə boş ola bilməz")
    private String password;

    @NotBlank(message = "Rol seçilməlidir")
    private String role;
}