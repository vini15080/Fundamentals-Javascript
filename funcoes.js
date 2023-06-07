const cliente = {
    nome: "joao",
    idade: 16,
    email: "joao@gmail.com",
    telefone: ["031978787", "031978787"],
    saldo: 200,
    efetuarPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuarPagamento(25);
