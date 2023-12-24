package com.example.ThriftyTech_Back.service.impl;

import com.example.ThriftyTech_Back.entity.RegistrationUser;
import com.example.ThriftyTech_Back.pojo.RegistrationUserPojo;
import com.example.ThriftyTech_Back.repo.RegistrationUserRepo;
import com.example.ThriftyTech_Back.service.RegistrationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegistrationUserServiceImpl implements RegistrationUserService {

    @Autowired
    private RegistrationUserRepo registrationUserRepo;

    @Override
    public RegistrationUser registerUser(RegistrationUserPojo userPojo) {
        RegistrationUser userEntity = mapPojoToEntity(userPojo);
        return registrationUserRepo.save(userEntity); // Use save method from JpaRepository
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

    @Override
    public void updateUser(RegistrationUser user) {
        Optional<RegistrationUser> existingUserOptional = registrationUserRepo.findById(user.getId());

        if (existingUserOptional.isPresent()) {
            RegistrationUser existingUser = existingUserOptional.get();

            // Update the fields you want to change
            existingUser.setPassword(user.getPassword());


            // Save the updated user entity
            registrationUserRepo.save(existingUser);
        } else {
            // Handle the case where the user is not found (log an error, throw an exception, etc.)
        }
    }

    private RegistrationUser mapPojoToEntity(RegistrationUserPojo userPojo) {
        RegistrationUser userEntity = new RegistrationUser();
        userEntity.setEmail(userPojo.getEmail());
        userEntity.setPassword(userPojo.getPassword());
        // Map other fields as needed

        return userEntity;
    }
}
