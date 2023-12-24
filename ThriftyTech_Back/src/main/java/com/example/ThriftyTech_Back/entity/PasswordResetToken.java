// PasswordResetToken.java
package com.example.ThriftyTech_Back.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "password_reset_tokens")
public class PasswordResetToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "token")
    private String token;

    @OneToOne(targetEntity = RegistrationUser.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private RegistrationUser user;

    @Column(name = "expiry_date")
    private LocalDateTime expiryDate;

    // Constructors, getters, setters

    public PasswordResetToken() {
        // Default constructor
    }

    public PasswordResetToken(String token, RegistrationUser user, LocalDateTime expiryDate) {
        this.token = token;
        this.user = user;
        this.expiryDate = expiryDate;
    }

    public Long getId() {
        return id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public RegistrationUser getUser() {
        return user;
    }

    public void setUser(RegistrationUser user) {
        this.user = user;
    }

    public LocalDateTime getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDateTime expiryDate) {
        this.expiryDate = expiryDate;
    }
    public boolean isExpired() {
        return LocalDateTime.now().isAfter(expiryDate);
    }

}
