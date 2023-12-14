package com.example.ThriftyTech_Back.service.impl;

import com.example.ThriftyTech_Back.entity.Product;
import com.example.ThriftyTech_Back.pojo.ProductPojo;
import com.example.ThriftyTech_Back.repo.ProductRepo;
import com.example.ThriftyTech_Back.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    public final ProductRepo productRepo;
    public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "/database_image";

    @Override
    public String save(ProductPojo productPojo) throws IOException {
        Product product;

        if (productPojo.getId() != null) {
            product = productRepo.findById(productPojo.getId()).orElseThrow(() -> new RuntimeException("Not Found"));
        } else {
            product = new Product();
        }

        if(productPojo.getId()!=null){
            product.setId(productPojo.getId());
        }
        product.setName(productPojo.getName());
        product.setColor(productPojo.getColor());
        product.setCondition(productPojo.getCondition());
        product.setModel(productPojo.getModel());
        product.setStorage(productPojo.getStorage());
        product.setPrice(productPojo.getPrice());
        if(productPojo.getPhoto()!=null){
            StringBuilder fileNames = new StringBuilder();
            Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, productPojo.getPhoto().getOriginalFilename());
            fileNames.append(productPojo.getPhoto().getOriginalFilename());
            Files.write(fileNameAndPath, productPojo.getPhoto().getBytes());

            product.setPhoto(productPojo.getPhoto().getOriginalFilename());
        }

        productRepo.save(product);
        return "Product created successfully";
    }
}
