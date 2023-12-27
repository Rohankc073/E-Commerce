package com.example.ThriftyTech_Back.controller;

import com.example.ThriftyTech_Back.entity.Product;
import com.example.ThriftyTech_Back.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your React frontend URL
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(
            @ModelAttribute Product product,
            @RequestParam("imageFile") MultipartFile imageFile
    ) {
        try {
            Product savedProduct = productService.addProduct(product, imageFile);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Optional<Product> optionalProduct = productService.getProductById(productId);
        return optionalProduct.map(product -> new ResponseEntity<>(product, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
