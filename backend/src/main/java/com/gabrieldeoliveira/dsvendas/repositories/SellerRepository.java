package com.gabrieldeoliveira.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabrieldeoliveira.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{
}