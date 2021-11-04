package com.gabrieldeoliveira.dsvendas.dto;

import java.io.Serializable;

import com.gabrieldeoliveira.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Double saleSum;

	public SaleSumDTO() {
	}

	public SaleSumDTO(Seller seller, Double saleSum) {
		sellerName = seller.getName();
		this.saleSum = saleSum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSaleSum() {
		return saleSum;
	}

	public void setSaleSum(Double saleSum) {
		this.saleSum = saleSum;
	}
}
