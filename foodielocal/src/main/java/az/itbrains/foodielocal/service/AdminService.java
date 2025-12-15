package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Admin;
import java.util.List;

public interface AdminService {
    List<Admin> getAllAdmins();
    Admin getAdminById(Long id);
    Admin createAdmin(Admin admin);
    Admin updateAdmin(Long id, Admin admin);
    boolean deleteAdmin(Long id); // ✅ boolean qaytarır
}