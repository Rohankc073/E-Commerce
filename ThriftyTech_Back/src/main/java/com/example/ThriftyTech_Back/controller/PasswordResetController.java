package com.example.ThriftyTech_Back.controller;// Import statements...

import com.example.ThriftyTech_Back.entity.PasswordResetToken;
import com.example.ThriftyTech_Back.entity.RegistrationUser;
import com.example.ThriftyTech_Back.service.PasswordResetTokenService;
import com.example.ThriftyTech_Back.service.RegistrationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/password-reset")
public class PasswordResetController {

    @Autowired
    private PasswordResetTokenService passwordResetTokenService;

    @Autowired
    private RegistrationUserService registrationUserService;

    @PostMapping("/request")
    public ResponseEntity<String> requestPasswordReset(@RequestBody Map<String, String> request) {
        String userEmail = request.get("email");

        RegistrationUser user = registrationUserService.findByEmail(userEmail);

        if (user != null) {
            PasswordResetToken resetToken = passwordResetTokenService.createToken(user);
            // Send an email with the reset link containing the resetToken.getToken()
            return ResponseEntity.ok("Password reset email sent successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> request) {
        String token = request.get("token");
        String newPassword = request.get("newPassword");

        PasswordResetToken resetToken = passwordResetTokenService.getToken(token);

        if (resetToken != null && !resetToken.isExpired()) {
            RegistrationUser user = resetToken.getUser();
            // Update the user's password with the new password
            user.setPassword(newPassword);
            registrationUserService.updateUser(user);

            // Delete the used token
            passwordResetTokenService.deleteToken(resetToken);

            return ResponseEntity.ok("Password reset successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid or expired token.");
        }
    }
}
