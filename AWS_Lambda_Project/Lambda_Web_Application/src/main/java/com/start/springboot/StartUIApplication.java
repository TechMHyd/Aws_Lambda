package com.start.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootConfiguration
@EnableAutoConfiguration
@CrossOrigin
public class StartUIApplication {

	public static void main(String[] args) {

		SpringApplication.run(StartUIApplication.class, args);

		System.out.println("Spring Boot Aws Demo Appkication Started...");

	}
}