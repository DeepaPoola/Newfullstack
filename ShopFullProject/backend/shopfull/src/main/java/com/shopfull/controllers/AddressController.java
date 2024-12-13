package com.shopfull.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.shopfull.dto.AddressRequestDto;
import com.shopfull.entities.Address;
import com.shopfull.services.AddressService;

import java.security.Principal;
import java.util.UUID;

@RestController
@RequestMapping("/address")
@CrossOrigin
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping
    public ResponseEntity<Address> createAddress(@RequestBody AddressRequestDto addressRequest, Principal principal){
        Address address = addressService.createAddress(addressRequest,principal);
        return new ResponseEntity<>(address, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAddress(@PathVariable UUID id){
        addressService.deleteAddress(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}