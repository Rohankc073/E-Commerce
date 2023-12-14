package com.example.ThriftyTech_Back.controller;

import com.example.ThriftyTech_Back.pojo.OrderPojo;
import com.example.ThriftyTech_Back.pojo.ProductPojo;
import com.example.ThriftyTech_Back.service.OrderService;
import com.example.ThriftyTech_Back.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
@RequestMapping("/order")
public class OrderController {
    private final ProductService productService;
    @GetMapping("/vieworder")
    public String getOrder(Model model) {
        model.addAttribute("order", new OrderPojo());
//        return ma page ko naam ma
        return "";
    }
    @PostMapping("/deleteorder")
    public String deleteOrder(@Valid OrderPojo orderPojo) throws IOException {
        OrderService.save(orderPojo);
//        save vayesi kata redirect garne tesko naam : paxi
        return "redirect:";
    }
}
