package com.shopfull.services;

import java.util.List;
import java.util.UUID;

import com.shopfull.dto.ProductDto;
import com.shopfull.entities.Product;

public interface ProductService {

    public Product addProduct(ProductDto product);
    public List<ProductDto> getAllProducts(UUID categoryId, UUID typeId);

    ProductDto getProductBySlug(String slug);

    ProductDto getProductById(UUID id);

    Product updateProduct(ProductDto productDto, UUID id);

    Product fetchProductById(UUID uuid) throws Exception;
}
