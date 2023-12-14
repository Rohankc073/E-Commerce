package com.example.ThriftyTech_Back.pojo;

import com.example.ThriftyTech_Back.entity.Product;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductPojo {
    private Long id;

    private MultipartFile photo;

    @NotEmpty(message = "Product Name can't be empty")
    private String name;

    @NotEmpty(message = "Product Color can't be empty")
    private String color;

    @NotEmpty(message = "Product Storage can't be empty")
    private String storage;

    @NotEmpty(message = "Product Condition can't be empty")
    private String condition;

    @NotEmpty(message = "Product Model can't be empty")
    private String model;

    @NotEmpty(message = "Product Price can't be empty")
    private String price;

    public ProductPojo(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.color = product.getColor();
        this.storage = product.getStorage();
        this.condition = product.getCondition();
        this.model = product.getModel();
        this.price = product.getPrice();
    }
}
