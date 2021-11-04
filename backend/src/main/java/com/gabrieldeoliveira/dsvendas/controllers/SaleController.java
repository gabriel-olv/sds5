package com.gabrieldeoliveira.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabrieldeoliveira.dsvendas.dto.SaleDTO;
import com.gabrieldeoliveira.dsvendas.services.SaleService;

@RestController
@RequestMapping("/sales")
public class SaleController {

	@Autowired
	SaleService serv;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> allSales(Pageable pageable) {
		Page<SaleDTO> allSales = serv.findAll(pageable);
		return ResponseEntity.ok(allSales);
	}
}
