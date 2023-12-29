package com.example.ThriftyTech_Back.controller;
import com.example.ThriftyTech_Back.entity.User;
import com.example.ThriftyTech_Back.pojo.UserPojo;
import com.example.ThriftyTech_Back.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")  // Use a leading slash for consistency
@RequiredArgsConstructor
//@PreAuthorize("permitAll()")
public class UserController {

    private final UserService userService;

//    @PreAuthorize("hasRole('USER')")
    @PostMapping("/save")  // Use a leading slash for consistency
    public String saveUser(@Valid @RequestBody UserPojo userPojo){
        userService.save(userPojo);
        return "Saved Successfully!";
    }

//    @PostMapping("/save")
//    public ResponseEntity<String> saveUser(@Valid @RequestBody UserPojo userPojo){
//        userService.save(userPojo);
//        return ResponseEntity.ok("Saved Successfully!");
//    }


    @GetMapping("/getAll")
    public List<User> getAll(){
        return this.userService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<User> getById(@PathVariable("id") Long id){
        return this.userService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id){
        this.userService.deleteById(id);
    }
}
