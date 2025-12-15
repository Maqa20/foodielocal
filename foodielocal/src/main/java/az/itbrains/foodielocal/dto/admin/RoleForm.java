package az.itbrains.foodielocal.dto.admin;

import jakarta.validation.constraints.NotBlank;

public class RoleForm {

    private Long id;

    @NotBlank(message = "Role adı boş ola bilməz")
    private String name;

    private String description;

    // Getter və Setter-lər
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}