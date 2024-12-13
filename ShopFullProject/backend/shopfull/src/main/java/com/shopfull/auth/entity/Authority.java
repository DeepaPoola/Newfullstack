package com.shopfull.auth.entity;

import java.util.UUID;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "AUTH_AUTHORITY")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Authority implements GrantedAuthority {
	
	@Id
	@GeneratedValue
	private UUID id;
	
	@Column(nullable=false)
	private String roleCode;
	
	@Column(nullable=false)
	private String roleDescription;
	
	

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return roleCode;
	}

}
