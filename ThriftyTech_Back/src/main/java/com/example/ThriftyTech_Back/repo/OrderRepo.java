package com.example.ThriftyTech_Back.repo;

import com.example.ThriftyTech_Back.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Product, Long> {
}
