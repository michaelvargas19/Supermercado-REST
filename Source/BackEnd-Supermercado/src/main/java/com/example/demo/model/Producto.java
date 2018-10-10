package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	
	private String sku;
	
	private String uniMedida;
	
	private double valor;
	
	private double descuento;
	
	private Rol rol;
	
	@ManyToOne
	private Supermercado supermercadop;
	
		
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public Rol getRol() {
		return rol;
	}

	public void setRol(Rol rol) {
		this.rol = rol;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getUniMedida() {
		return uniMedida;
	}

	public void setUniMedida(String uniMedida) {
		this.uniMedida = uniMedida;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public double getDescuento() {
		return descuento;
	}

	public void setDescuento(double descuento) {
		this.descuento = descuento;
	}

	public Supermercado getSupermercadop() {
		return supermercadop;
	}

	public void setSupermercadop(Supermercado supermercadop) {
		this.supermercadop = supermercadop;
	}

	
	
}
