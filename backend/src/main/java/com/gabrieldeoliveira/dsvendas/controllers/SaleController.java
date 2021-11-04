package com.gabrieldeoliveira.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabrieldeoliveira.dsvendas.dto.SaleDTO;
import com.gabrieldeoliveira.dsvendas.dto.SaleSuccessDTO;
import com.gabrieldeoliveira.dsvendas.dto.SaleSumDTO;
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
	
	@GetMapping("/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountBySeller() {
		List<SaleSumDTO> list = serv.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> successBySeller() {
		List<SaleSuccessDTO> list = serv.successGroupedBySeller();
		return ResponseEntity.ok(list);
	}
}
