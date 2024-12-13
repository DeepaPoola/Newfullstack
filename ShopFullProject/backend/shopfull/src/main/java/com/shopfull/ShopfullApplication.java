package com.shopfull;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class ShopfullApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopfullApplication.class, args);
	}

}
