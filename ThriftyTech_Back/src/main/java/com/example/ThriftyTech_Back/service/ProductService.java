package com.example.ThriftyTech_Back.service;

import com.example.ThriftyTech_Back.pojo.ProductPojo;

import java.io.IOException;

public interface ProductService {

    String save(ProductPojo productPojo) throws IOException;
}
