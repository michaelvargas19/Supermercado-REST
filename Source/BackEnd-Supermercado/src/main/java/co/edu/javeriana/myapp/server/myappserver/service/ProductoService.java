package co.edu.javeriana.myapp.server.myappserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Producto;
import co.edu.javeriana.myapp.server.myappserver.model.ProductoRepository;
import co.edu.javeriana.myapp.server.myappserver.model.Usuario;

import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/producto")
public class ProductoService {

	@Autowired
	private ProductoRepository repository;

	@RequestMapping("")
	Iterable<Producto> findAll() {
		return repository.findAll();
	}

	@RequestMapping("/{id}")
	Optional<Producto> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public Producto create(@RequestBody Producto p) {
		
		return repository.save(p);
    }
}
