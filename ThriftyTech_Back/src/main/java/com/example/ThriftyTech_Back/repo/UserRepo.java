package com.example.ThriftyTech_Back.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ThriftyTech_Back.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

}
