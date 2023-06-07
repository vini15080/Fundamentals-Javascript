// Importando o conteúdo do arquivo JSON "cliente.json"
const dados = require("./cliente.json");
console.log(dados);

// Exibindo o tipo de dados da variável "dados"
console.log(typeof dados);

// Convertendo o objeto JavaScript "dados" em uma string JSON
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);

// Exibindo o tipo de dados da variável "clienteEmString"
console.log(typeof clienteEmString);

// Convertendo a string JSON "clienteEmString" de volta para um objeto JavaScript
const objetoCliente = JSON.parse(clienteEmString);

// Imprimindo o objeto JavaScript "objetoCliente"
console.log(objetoCliente);

// Exibindo o tipo de dados da variável "objetoCliente"
console.log(typeof objetoCliente);
