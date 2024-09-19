package br.com.cetam.aulademo.service;

import br.com.cetam.aulademo.model.Pessoa;
import br.com.cetam.aulademo.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Pessoa> buscarPorId(Long id) {
        return repository.findById(id);
    }


    public void deletarPessoa(Long id) {
        repository.deleteById(id);
    }
}

