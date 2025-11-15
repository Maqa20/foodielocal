package az.itbrains.foodielocal.repository;

import az.itbrains.foodielocal.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByResetToken(String token);
}