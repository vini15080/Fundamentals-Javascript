const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["312323232", "3134324324"],

};

cliente.enderecos = [
{
    rua: "rua. Professor",
    numero: 1337,
    apartamento: true,
    complemento: "ap 3304",
},
];

//código omitido

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
      console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
  }