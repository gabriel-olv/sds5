package com.gabrieldeoliveira.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabrieldeoliveira.dsvendas.dto.SellerDTO;
import com.gabrieldeoliveira.dsvendas.services.SellerService;

@RestController
@RequestMapping("/sellers")
public class SellerController {

	@Autowired
	SellerService serv;
	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> allSellers() {
		List<SellerDTO> allSellers = serv.findAll();
		return ResponseEntity.ok(allSellers);
	}
}
