package com.example.ThriftyTech_Back.entity;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @SequenceGenerator(name = "products_seq_gen", sequenceName = "products_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "products_seq_gen", strategy = GenerationType.SEQUENCE)

    private Long id;

    private String photo;

    @Column(name = "productName", nullable = false)
    private String name;

    @Column(name = "productColor", nullable = false)
    private String color;

    @Column(name = "productStorage", nullable = false)
    private String storage;

    @Column(name = "productCondition", nullable = false)
    private String condition;

    @Column(name = "productModel", nullable = false)
    private String model;

    @Column(name = "productPrice", nullable = false)
    private String price;

    @Transient
    private String imageBase64;
}
