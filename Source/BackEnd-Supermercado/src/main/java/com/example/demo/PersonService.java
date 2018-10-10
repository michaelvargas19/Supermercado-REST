package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Person;
import com.example.demo.model.PersonRepository;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonService {

	@Autowired
	private PersonRepository repository;

	@RequestMapping("/persons")
	Iterable<Person> findAll() {
		return repository.findAll();
	}

	@RequestMapping("/persons/{id}")
	Optional<Person> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}
}
