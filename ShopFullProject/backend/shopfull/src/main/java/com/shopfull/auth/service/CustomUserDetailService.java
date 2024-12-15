package com.shopfull.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shopfull.auth.entity.User;
import com.shopfull.auth.repository.UserDetailRepository;


@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserDetailRepository userDetailRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user= userDetailRepository.findByEmail(username);
        if(null == user){
            throw new UsernameNotFoundException("User Not Found with userName "+username);
        }
        return user;
    }
}
