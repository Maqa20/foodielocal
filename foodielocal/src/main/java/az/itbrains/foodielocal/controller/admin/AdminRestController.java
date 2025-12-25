package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.model.Admin;
import az.itbrains.foodielocal.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminRestController {

    private final AdminService service;

    public AdminRestController(AdminService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Admin>> all() {
        return ResponseEntity.ok(service.getAllAdmins());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> one(@PathVariable Long id) {
        Admin admin = service.getAdminById(id);
        if (admin == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(admin);
    }

    @PostMapping
    public ResponseEntity<Admin> create(@Valid @RequestBody Admin admin) {
        Admin created = service.createAdmin(admin);
        return ResponseEntity.status(201).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> update(@PathVariable Long id, @Valid @RequestBody Admin admin) {
        Admin updated = service.updateAdmin(id, admin);
        if (updated == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean deleted = service.deleteAdmin(id);
        if (!deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
}