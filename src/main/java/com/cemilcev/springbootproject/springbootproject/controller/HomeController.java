package com.cemilcev.springbootproject.springbootproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = {"/", "/home", "/employees"})
    public String getHomePage() {
        return "home";
    }
}
