package com.cemilcev.springbootproject.springbootproject.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DepartmentController {

    @RequestMapping("departments")
    public String getDepartmentListPage() {
        return "departmentList";
    }
}
