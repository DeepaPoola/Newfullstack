package com.shopfull.auth.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopfull.auth.entity.User;

@Repository
public interface UserDetailRepository extends JpaRepository<User,UUID> {
    User findByEmail(String username);
}
