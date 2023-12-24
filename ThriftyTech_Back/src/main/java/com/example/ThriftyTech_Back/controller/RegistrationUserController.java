package com.example.ThriftyTech_Back.controller;

import com.example.ThriftyTech_Back.entity.RegistrationUser;
import com.example.ThriftyTech_Back.pojo.RegistrationUserPojo;
import com.example.ThriftyTech_Back.service.RegistrationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registration-users")
public class RegistrationUserController {

    @Autowired
    private RegistrationUserService registrationUserService;

    @PostMapping("/register")
    public ResponseEntity<RegistrationUser> registerUser(@RequestBody RegistrationUserPojo userPojo) {
        RegistrationUser registeredUser = registrationUserService.registerUser(userPojo);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        boolean isAuthenticated = registrationUserService.authenticateUser(email, password);

        if (isAuthenticated) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Login failed", HttpStatus.UNAUTHORIZED);
        }
    }

    // Add other endpoints as needed
}
