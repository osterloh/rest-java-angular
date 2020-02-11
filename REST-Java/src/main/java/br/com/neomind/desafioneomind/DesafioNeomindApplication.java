package br.com.neomind.desafioneomind;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.neomind.desafioneomind.dao.FornecedorRepository;
import br.com.neomind.desafioneomind.model.Fornecedor;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class DesafioNeomindApplication {
	
	@Autowired
	private FornecedorRepository repository;
	
	@PostMapping("/register")
	public String register(@RequestBody Fornecedor fornecedor) {
		repository.save(fornecedor);
		return "Registro cadastradado com sucesso!!!";
	}
	
	@GetMapping("/getAllFornecedor")
	public List<Fornecedor> findAllFornecedor(){
		return repository.findAll();
	}
	
	@GetMapping("/findFornecedor/{email}")
	public List<Fornecedor> findFornecedor(@PathVariable String email){
		return repository.findByEmail(email);
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity findById(@PathVariable int id) {
		return repository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping("/updateFornecedor/{id}")
	public ResponseEntity update(@PathVariable int id, @RequestBody Fornecedor fornecedor) {
		return repository.findById(id).map(record -> {
			record.setNome(fornecedor.getNome());
			record.setEmail(fornecedor.getEmail());
			record.setComentario(fornecedor.getComentario());
			record.setCnpj(fornecedor.getCnpj());
			Fornecedor update = repository.save(record);
			return ResponseEntity.ok().body(update);
		}).orElse(ResponseEntity.notFound().build());
		
	}
	
	@DeleteMapping("/cancel/{id}")
	public List<Fornecedor> cancelRegistration(@PathVariable int id){
		repository.deleteById(id);
		return repository.findAll();
	}

	public static void main(String[] args) {
		SpringApplication.run(DesafioNeomindApplication.class, args);
	}

}
