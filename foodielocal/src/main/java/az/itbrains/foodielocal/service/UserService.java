package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.User;

import java.util.List;

public interface UserService {
    User registerUser(User user);
    List<User> findAll();
    User findById(Long id);
}