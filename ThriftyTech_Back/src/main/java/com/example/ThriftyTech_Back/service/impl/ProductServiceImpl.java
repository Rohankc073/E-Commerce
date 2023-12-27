package com.example.ThriftyTech_Back.service.impl;

import com.example.ThriftyTech_Back.entity.Product;
import com.example.ThriftyTech_Back.pojo.ProductPojo;
import com.example.ThriftyTech_Back.repo.ProductRepo;
import com.example.ThriftyTech_Back.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class ProductServiceImpl extends ProductService {

    @Autowired
    private ProductRepo productRepos;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Override
    public Product addProduct(Product product, MultipartFile imageFile) throws IOException {
        byte[] imageData = imageFile.getBytes();
        product.setImageData(imageData);

        // Save the product to the database
        Product savedProduct = productRepos.save(product);

        // Save the image file to the file system
        saveImageToFileSystem(savedProduct.getId(), imageFile);

        return savedProduct;
    }

    private void saveImageToFileSystem(Long productId, MultipartFile imageFile) throws IOException {
        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        try (var inputStream = imageFile.getInputStream()) {
            Path filePath = uploadPath.resolve(productId + "_" + imageFile.getOriginalFilename());
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        }
    }

    @Override
    public String save(ProductPojo productPojo) throws IOException {
        return null;
    }

    // Other methods in your service implementation...
}
