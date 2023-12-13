package com.example.ThriftyTech_Back.service.impl;
import com.example.ThriftyTech_Back.entity.User;
import com.example.ThriftyTech_Back.pojo.UserPojo;
import com.example.ThriftyTech_Back.repo.UserRepo;
import com.example.ThriftyTech_Back.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    @Override
    public String save(UserPojo userPojo) {
        User user = new User();

        if(userPojo.getId() != null){
            user = userRepo.findById(userPojo.getId()).orElse(null);
        }

        user.setUsername(userPojo.getUsername());
        user.setPassword(userPojo.getPassword());
        user.setEmail(userPojo.getEmail());

        userRepo.save(user);
        return "Saved Successfully!";
    }

    @Override
    public List<User> getAll() {
        return userRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        userRepo.deleteById(id);
    }

    @Override
    public Optional<User> getById(Long id) {
        return userRepo.findById(id);
    }


}