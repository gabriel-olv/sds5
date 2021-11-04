package com.gabrieldeoliveira.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gabrieldeoliveira.dsvendas.dto.SaleSuccessDTO;
import com.gabrieldeoliveira.dsvendas.dto.SaleSumDTO;
import com.gabrieldeoliveira.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query("SELECT new com.gabrieldeoliveira.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	public List<SaleSumDTO> amountGroupedBySeller();

	@Query("SELECT new com.gabrieldeoliveira.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")	
	public List<SaleSuccessDTO> successGroupedBySeller();
}