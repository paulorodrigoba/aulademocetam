const apiUrl = "http://localhost:8080/api/pessoas";

const formulario = document.querySelector("#form-cadastro");

const Inome = document.querySelector(".nome");
const Iendereco = document.querySelector(".endereco");
const Itelefone = document.querySelector(".telefone");

function cadastrar() {
  fetch(apiUrl, {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      nome: Inome.value,
      endereco: Iendereco.value,
      telefone: Itelefone.value
    })
  })
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Erro ao cadastrar');
    }
  })
  .then(function (data) {
    console.log("Cadastro realizado:", data);
    alert("Cadastro realizado com sucesso!");
    listarPessoas(); // Atualiza a lista de pessoas
  })
  .catch(function (error) {
    console.error("Erro:", error);
    alert("Erro ao realizar o cadastro!");
  });
}

function listarPessoas() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar lista de pessoas');
      }
      return response.json();
    })
    .then(pessoas => {
      console.log("Lista de pessoas:", pessoas);

      // Gerar o HTML da lista de pessoas
      let listaHTML = "";
      pessoas.forEach(pessoa => {
        listaHTML += `
          <li>
            Nome: ${pessoa.nome}, Endereço: ${pessoa.endereco}, Telefone: ${pessoa.telefone}
            <button onclick="editarPessoa(${pessoa.id})">Editar</button>
            <button onclick="deletarPessoa(${pessoa.id})">Deletar</button>
          </li>
        `;
      });

      // Inserir a lista gerada no elemento HTML com o id "lista-pessoas"
      document.getElementById("lista-pessoas").innerHTML = listaHTML;
    })
    .catch(error => {
      console.error("Erro ao listar pessoas:", error);
    });
}

// Exemplo de funções para editar e deletar
function editarPessoa(id) {
  // Implementar a lógica para editar a pessoa
  console.log(`Editando pessoa com ID: ${id}`);
}

function deletarPessoa(id) {
  // Implementar a lógica para deletar a pessoa
  console.log(`Deletando pessoa com ID: ${id}`);
}

// Chamar a função listarPessoas ao carregar a página
window.onload = listarPessoas;
