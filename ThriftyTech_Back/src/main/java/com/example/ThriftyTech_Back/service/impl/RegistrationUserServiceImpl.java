package com.example.ThriftyTech_Back.service.impl;

import com.example.ThriftyTech_Back.entity.RegistrationUser;
import com.example.ThriftyTech_Back.pojo.RegistrationUserPojo;
import com.example.ThriftyTech_Back.repo.RegistrationUserRepo;
import com.example.ThriftyTech_Back.service.RegistrationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// RegistrationUserServiceImpl.java
@Service
//@Override
public class RegistrationUserServiceImpl implements RegistrationUserService {

    @Autowired
    private RegistrationUserRepo registrationUserRepo;

    @Override
    public RegistrationUser registerUser(RegistrationUserPojo userPojo) {
        // Convert POJO to entity
        RegistrationUser userEntity = mapPojoToEntity(userPojo);

        // Save entity
        return registrationUserRepo.save(userEntity);
    }



    @Override
    public RegistrationUser findByEmail(String email) {
        return registrationUserRepo.findByEmail(email);
    }

    @Override
    public boolean authenticateUser(String email, String password) {
        RegistrationUser user = findByEmail(email);
        return user != null && password.equals(user.getPassword());
    }

    // Add other methods as needed

    // Helper method to convert POJO to Entity
    private RegistrationUser mapPojoToEntity(RegistrationUserPojo userPojo) {
        RegistrationUser userEntity = new RegistrationUser();
        userEntity.setEmail(userPojo.getEmail());
        userEntity.setPassword(userPojo.getPassword());
        // Map other fields as needed

        return userEntity; // Add the return statement
    }
}
