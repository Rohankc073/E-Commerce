package com.example.ThriftyTech_Back.controller;

import com.example.ThriftyTech_Back.pojo.ProductPojo;
import com.example.ThriftyTech_Back.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.security.Principal;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {

    private final ProductService productService;
    @GetMapping("/add-product")
    public String getAddProductPage(Model model) {
        model.addAttribute("product", new ProductPojo());
//        return ma page ko naam ma
        return "";
    }
    @PostMapping("/save/product")
    public String saveProduct(@Valid ProductPojo productPojo) throws IOException {
        productService.save(productPojo);
//        save vayesi kata redirect garne tesko naam : paxi
        return "redirect:";
    }
}
