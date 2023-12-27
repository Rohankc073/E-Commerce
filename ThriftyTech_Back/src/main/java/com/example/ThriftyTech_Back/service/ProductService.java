package com.example.ThriftyTech_Back.service;

import com.example.ThriftyTech_Back.entity.Product;
import com.example.ThriftyTech_Back.pojo.ProductPojo;
import com.example.ThriftyTech_Back.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public abstract class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public Product addProduct(Product product, MultipartFile imageFile) throws IOException {
        byte[] imageData = imageFile.getBytes();
        product.setImageData(imageData);
        return productRepo.save(product);
    }

    public Optional<Product> getProductById(Long productId) {
        return productRepo.findById(productId);
    }

    public abstract String save(ProductPojo productPojo) throws IOException;
}
