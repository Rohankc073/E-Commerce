package com.example.ThriftyTech_Back.service;

import com.example.ThriftyTech_Back.entity.User;
import com.example.ThriftyTech_Back.pojo.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {
    String save(UserPojo userPojo);

    List<User> getAll();

    void deleteById(Long id);

    Optional<User> getById(Long id);
}
