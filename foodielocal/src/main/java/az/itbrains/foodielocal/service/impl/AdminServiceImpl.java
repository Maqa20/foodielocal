package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Admin;
import az.itbrains.foodielocal.repository.AdminRepository;
import az.itbrains.foodielocal.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final AdminRepository repository;

    @Override
    public List<Admin> getAllAdmins() {
        return repository.findAll();
    }

    @Override
    public Admin getAdminById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Admin createAdmin(Admin admin) {
        return repository.save(admin);
    }

    @Override
    public Admin updateAdmin(Long id, Admin admin) {
        return repository.findById(id).map(existing -> {existing.setUsername(admin.getUsername());existing.setEmail(admin.getEmail());existing.setPassword(admin.getPassword());
                    return repository.save(existing);
                })
                .orElse(null);
    }

    @Override
    public boolean deleteAdmin(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}