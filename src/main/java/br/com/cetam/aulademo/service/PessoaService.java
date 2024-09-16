package br.com.cetam.aulademo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository repository;

    public Pessoa salvarPessoa(Pessoa pessoa) {
        return repository.save(pessoa);
    }

    public List<Pessoa> listarPessoas() {
        return repository.findAll();
    }
}

