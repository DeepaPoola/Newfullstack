package com.shopfull.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopfull.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID> {
}
