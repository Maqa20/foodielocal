package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Role;
import java.util.List;
import java.util.Optional;

public interface RoleService {
    Optional<Role> findByName(String name);
    List<Role> findAll(); // bütün rolları qaytarmaq üçün
}