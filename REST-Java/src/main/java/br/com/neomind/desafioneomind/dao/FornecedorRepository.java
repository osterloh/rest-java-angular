package br.com.neomind.desafioneomind.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neomind.desafioneomind.model.Fornecedor;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Integer> {
	
	List<Fornecedor> findByEmail(String email);

}
