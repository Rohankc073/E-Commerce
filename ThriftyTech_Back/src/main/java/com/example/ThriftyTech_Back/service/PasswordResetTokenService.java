package com.example.ThriftyTech_Back.service;

import com.example.ThriftyTech_Back.entity.PasswordResetToken;
import com.example.ThriftyTech_Back.entity.RegistrationUser;

// PasswordResetTokenService.java
public interface PasswordResetTokenService {
    PasswordResetToken createToken(RegistrationUser user);
    PasswordResetToken getToken(String token);
    void deleteToken(PasswordResetToken token);

    void updateUser(RegistrationUser user);
    // Add other methods as needed
}
