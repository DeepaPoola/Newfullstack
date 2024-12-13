package com.shopfull.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.shopfull.entities.Address;

import java.util.UUID;

@Repository
public interface AddressRepository extends JpaRepository<Address, UUID> {
}
