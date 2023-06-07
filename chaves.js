var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

meuCarro["fabricacao"] = "Ford";
meuCarro["modelo"] = "Mustang";
meuCarro["ano"] = 2023;

var meuObj = new Object(),
    str = "minhaString",
    aleat = Math.random(),
    obj = new Object();

meuObj.tipo               = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str]               = "valor de String";
meuObj[aleat]             = "Numero Aleatorio";
meuObj[obj]               = "Objeto";
meuObj[""]                = "Mesmo uma string vazia";

console.log(meuObj);
