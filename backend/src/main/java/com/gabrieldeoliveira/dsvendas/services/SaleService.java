package com.gabrieldeoliveira.dsvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gabrieldeoliveira.dsvendas.dto.SaleDTO;
import com.gabrieldeoliveira.dsvendas.repositories.SaleRepository;
import com.gabrieldeoliveira.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	SaleRepository repo;
	
	@Autowired
	SellerRepository sellerRepo;

	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepo.findAll(); 
		Page<SaleDTO> page = repo.findAll(pageable)
				.map(s -> new SaleDTO(s));
		return page;
	}
}
