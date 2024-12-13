package com.shopfull.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ServerErrorException;

import com.shopfull.auth.dto.RegistrationRequest;
import com.shopfull.auth.dto.RegistrationResponse;
import com.shopfull.auth.entity.User;
import com.shopfull.auth.helper.VerificationCodeGenerator;
import com.shopfull.auth.repository.UserDetailRepository;

@Service
public class RegistrationService {

	@Autowired
	private UserDetailRepository userDetailRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthorityService authorityService;
	
	@Autowired
	private EmailService emailService;
	
	
	public RegistrationResponse createUser(RegistrationRequest request) {
		// TODO Auto-generated method stub
		
		User existing =userDetailRepository.findByEmail(request.getEmail());
		
		if(null != existing) {
			return RegistrationResponse.builder()
					.code(400)
					.message("Email already exist!")
					.build();
		}
		try {
			   User user = new User();
	            user.setFirstName(request.getFirstName());
	            user.setLastName(request.getLastName());
	            user.setEmail(request.getEmail());
	            user.setEnabled(false);
	            user.setPassword(passwordEncoder.encode(request.getPassword()));
	            user.setProvider("manual");
	            
	            String code =VerificationCodeGenerator.generateCode();
	            
	            user.setVerificationCode(code);
	            user.setAuthorities(authorityService.getUserAuthority());
	            userDetailRepository.save(user);
	            
	            //call method to send mail
	            emailService.sendMail(user);
	            
	            return RegistrationResponse.builder()
	            		.code(200)
	            		.message("User Createad")
	            		.build();
	            
			 
		}
		catch(Exception e) {
			 throw new ServerErrorException(e.getMessage(),e.getCause());
		}
	
	}


	public void verifyUser(String userName) {
		// TODO Auto-generated method stub
		User user = userDetailRepository.findByEmail(userName);
		user.setEnabled(true);
		userDetailRepository.save(user);
		
	}

}
