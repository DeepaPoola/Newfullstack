package com.shopfull.entities;

import java.util.UUID;

import com.shopfull.auth.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="addresses")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Address {

	@Id
	@GeneratedValue
	private UUID id;
	
	@Column(nullable = false)
	private String street;
	
	@Column(nullable = false)
	private String city;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String phoneNumber;
	
	
	@Column(nullable = false)
	private String state;
	
	@Column(nullable = false)
	private String zipCode;
	
	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name="user_id",nullable=false)
	private User user;
	
	
}
