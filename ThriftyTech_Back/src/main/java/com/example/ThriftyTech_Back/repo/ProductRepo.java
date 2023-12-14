package com.example.ThriftyTech_Back.repo;

import com.example.ThriftyTech_Back.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

}
