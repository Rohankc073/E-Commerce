package com.example.ThriftyTech_Back.repo;

import com.example.ThriftyTech_Back.entity.RegistrationUser;
import org.springframework.data.jpa.repository.JpaRepository;

// RegistrationUserRepository.java
public interface RegistrationUserRepo extends JpaRepository<RegistrationUser, Integer> {
    RegistrationUser findByEmail(String email);
}
