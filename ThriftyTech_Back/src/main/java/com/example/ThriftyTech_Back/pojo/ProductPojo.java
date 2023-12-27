package com.example.ThriftyTech_Back.pojo;

import lombok.Getter;

@Getter
public class ProductPojo {
    private String name;
    private String description;
    private double price;
    private byte[] imageData;

    // Constructors, getters, and setters

    public ProductPojo() {
        // Default constructor
    }

    public ProductPojo(String name, String description, double price, byte[] imageData) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageData = imageData;
    }

    // Getter and setter methods for each field

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
}
