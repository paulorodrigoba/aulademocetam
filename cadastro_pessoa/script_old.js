const formulario = document.querySelector("#form-cadastro");

const Inome = document.querySelector(".nome");
const Iendereco = document.querySelector(".endereco");
const Itelefone = document.querySelector(".telefone");

function cadastrar() {
  fetch("http://localhost:8080/api/pessoas", {
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
  })
  .catch(function (error) {
    console.error("Erro:", error);
    alert("Erro ao realizar o cadastro!");
  });
}

function limpar() {
  Inome.value = "";
  Iendereco.value = "";
  Itelefone.value = "";
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  cadastrar();
  limpar();
});
