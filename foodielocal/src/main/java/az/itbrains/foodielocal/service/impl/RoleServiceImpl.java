package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Role;
import az.itbrains.foodielocal.repository.RoleRepository;
import az.itbrains.foodielocal.service.RoleService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Optional<Role> findByName(String name) {
        Optional<Role> optionalRole = roleRepository.findByName(name);

        if (optionalRole.isPresent()) {
            return optionalRole;
        } else {
            throw new RuntimeException("Rol tapılmadı: " + name);
        }
    }
}