package com.example.ThriftyTech_Back.entity;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @SequenceGenerator(name = "orders_seq_gen", sequenceName = "orders_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "orders_seq_gen", strategy = GenerationType.SEQUENCE)

    private Long id;

    private String photo;

    @Column(name = "productName", nullable = false)
    private String name;

    @Column(name = "address", nullable = false)
    private String color;

    @Column(name = "fullName", nullable = false)
    private String storage;

    @Column(name = "phoneNo", nullable = false)
    private Long condition;

    @Column(name = "paymentOption", nullable = false)
    private String model;

    @Column(name = "productPrice", nullable = false)
    private String price;

    @Transient
    private String imageBase64;
}
