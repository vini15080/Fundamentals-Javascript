const cliente = {
    nome: "Vinicius", // Propriedade "nome" com valor "Vinicius"
    idade: 26, // Propriedade "idade" com valor 26
    cpf: "1231321213", // Propriedade "cpf" com valor "1231321213"
    email: "vinicius@gmail.com" // Propriedade "email" com valor "vinicius@gmail.com"
};

const chave = ["nome", "idade", "cpf", "email"]; // Array que contém as chaves (nomes das propriedades) do objeto "cliente"

chave.forEach((chave) => { // Para cada elemento "chave" no array "chave"
    console.log(`A chave: ${chave} tem valor ${cliente[chave]}`); // Imprime a mensagem formatada exibindo a chave e o valor correspondente
});
