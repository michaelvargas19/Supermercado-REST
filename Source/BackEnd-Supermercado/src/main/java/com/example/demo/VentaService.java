package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Person;
import com.example.demo.model.PersonRepository;
import com.example.demo.model.Producto;
import com.example.demo.model.ProductoRepository;
import com.example.demo.model.Venta;
import com.example.demo.model.VentaRepository;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VentaService {

	@Autowired
	private VentaRepository repository;

	@RequestMapping("/ventas")
	Iterable<Venta> findAll() {
		return repository.findAll();
	}

	@RequestMapping("/ventas/{id}")
	Optional<Venta> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}
}
