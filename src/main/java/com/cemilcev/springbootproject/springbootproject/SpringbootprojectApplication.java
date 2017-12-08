package com.cemilcev.springbootproject.springbootproject;

import com.cemilcev.springbootproject.springbootproject.domain.Employee;
import com.cemilcev.springbootproject.springbootproject.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class SpringbootprojectApplication extends SpringBootServletInitializer{

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
		return application.sources(SpringbootprojectApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringbootprojectApplication.class, args);
	}
}


