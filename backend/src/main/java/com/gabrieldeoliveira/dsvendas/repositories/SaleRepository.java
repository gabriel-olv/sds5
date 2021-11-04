package com.gabrieldeoliveira.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabrieldeoliveira.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
}