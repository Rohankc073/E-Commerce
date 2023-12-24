package com.example.ThriftyTech_Back.service;

import com.example.ThriftyTech_Back.entity.RegistrationUser;
import com.example.ThriftyTech_Back.pojo.RegistrationUserPojo;
import com.example.ThriftyTech_Back.pojo.UserPojo;

public interface RegistrationUserService {

    RegistrationUser registerUser(RegistrationUserPojo userPojo);


    RegistrationUser findByEmail(String email);
    boolean authenticateUser(String email, String password);

    void updateUser(RegistrationUser user);

    // Add other service methods as needed

}
