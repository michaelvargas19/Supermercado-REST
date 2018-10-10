package com.example.demo.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Venta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private Date fecha;
	
	private String cliente;

	private double total;
	
	private String factura;
	
	@OneToMany(mappedBy="venta")
	private List<Detalle> detalles;
	
	@ManyToOne
	private Supermercado supermercadov;

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public Supermercado getSupermercadop() {
		return supermercadov;
	}

	public void setSupermercadop(Supermercado supermercadop) {
		this.supermercadov = supermercadop;
	}

	
	
}
