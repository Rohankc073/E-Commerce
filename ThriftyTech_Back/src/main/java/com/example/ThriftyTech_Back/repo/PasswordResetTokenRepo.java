package com.example.ThriftyTech_Back.repo;

import com.example.ThriftyTech_Back.entity.PasswordResetToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// PasswordResetTokenRepository.java
@Repository
public interface PasswordResetTokenRepo extends JpaRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);
}
