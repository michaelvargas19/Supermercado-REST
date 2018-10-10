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

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoService {

	@Autowired
	private ProductoRepository repository;

	@RequestMapping("/productos")
	Iterable<Producto> findAll() {
		return repository.findAll();
	}

	@RequestMapping("/productos/{id}")
	Optional<Producto> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}
}
