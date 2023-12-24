package com.example.ThriftyTech_Back.service.impl;

import com.example.ThriftyTech_Back.entity.PasswordResetToken;
import com.example.ThriftyTech_Back.entity.RegistrationUser;
import com.example.ThriftyTech_Back.repo.PasswordResetTokenRepo;
import com.example.ThriftyTech_Back.service.PasswordResetTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ThriftyTech_Back.repo.RegistrationUserRepo;
import java.time.LocalDateTime;
import java.util.UUID;

// PasswordResetTokenServiceImpl.java
@Service
public class PasswordResetTokenServiceImpl implements PasswordResetTokenService {

    @Autowired
    private PasswordResetTokenRepo passwordResetTokenRepo;

    @Override
    public PasswordResetToken createToken(RegistrationUser user) {
        // Create a unique token and set expiry date
        String token = UUID.randomUUID().toString();
        LocalDateTime expiryDate = LocalDateTime.now().plusHours(24); // Set to expire in 24 hours

        // Save the token to the database
        PasswordResetToken resetToken = new PasswordResetToken();
        resetToken.setToken(token);
        resetToken.setUser(user);
        resetToken.setExpiryDate(expiryDate);
        return passwordResetTokenRepo.save(resetToken);
    }

    @Override
    public PasswordResetToken getToken(String token) {
        return passwordResetTokenRepo.findByToken(token);
    }

    @Override
    public void deleteToken(PasswordResetToken token) {
        passwordResetTokenRepo.delete(token);
    }

    @Override
    public void updateUser(RegistrationUser user) {

    }
//    @Override
//    public void updateUser(RegistrationUser user) {
//        RegistrationUserRepo.save(user);
//    }

    // Add other methods as needed
}
