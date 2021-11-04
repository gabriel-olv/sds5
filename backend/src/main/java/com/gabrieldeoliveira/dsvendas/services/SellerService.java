package com.gabrieldeoliveira.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabrieldeoliveira.dsvendas.dto.SellerDTO;
import com.gabrieldeoliveira.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	SellerRepository repo;

	public List<SellerDTO> findAll() {
		List<SellerDTO> sDto = repo.findAll().stream()
				.map(s -> new SellerDTO(s))
				.collect(Collectors.toList());
		return sDto;
	}
}
