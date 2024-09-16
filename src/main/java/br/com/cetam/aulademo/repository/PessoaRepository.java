package br.com.cetam.aulademo.repository;

import br.com.cetam.aulademo.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}

