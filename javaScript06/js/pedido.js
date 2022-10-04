//CADASTRO DO CLIENTE
function cadastro(){
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = "";
    let resultado = document.getElementById("resultado");

    if(nome =="" || endereco =="" || email =="" || telefone ==""){
        mensagem = "Preencha o(os) campo(os) faltante(s)!";
    }else{
        mensagem = "Cadastro concluido!";
    }

    resultado.innerHTML = `${mensagem}`;

    localStorage.setItem('nomeCliente', nome);
    localStorage.setItem('enderecoCliente', endereco);
    localStorage.setItem('emailCliente', email);
    localStorage.setItem('telefoneCliente', telefone);
}
let preco = 0;

//TAMANHO DA PIZZA
function tamanhoPizza(){
    let tamanho = document.getElementById("tamanhoPizza");
    let tamanhoPizza = tamanho.selectedIndex;
    let mensagem = "";
    resposta1 = document.getElementById("resposta1");

    if(tamanhoPizza == 0){
        mensagem = "Pequeno - Maximo de sabore(2)";
        preco = preco + 9;
    }else if(tamanhoPizza == 1){
        mensagem = "Medio - Maximo de sabores(3)";
        preco = preco + 12;
    }else if(tamanhoPizza == 2){
        mensagem = "Grande - Maximo de sabores(4)"
        preco = preco + 16;
    }else if(tamanhoPizza == 3){
        mensagem = "Gigante - Maximo de sabores(5)";
        preco = preco + 22; 
    }

    resposta1.innerHTML = `${mensagem}`;

    localStorage.setItem('tamanhoPizza', mensagem);
    localStorage.setItem('precoTamanho', preco);
    
}

//SABORES DA PIZZA
function saboresPizza(){
    let tamanho = document.getElementById("tamanhoPizza");
    let tamanhoPizza = tamanho.selectedIndex;
    let sabor = document.getElementById("saboresPizza");
    let saboresPizza = sabor.selectedIndex;
    let mensagem = "";
    let resposta2 = document.getElementById("resposta2");

    if(tamanhoPizza == 0 && saboresPizza == 0 || tamanhoPizza == 1 && saboresPizza == 0 || tamanhoPizza == 2 && saboresPizza == 0 || tamanhoPizza == 3 && saboresPizza == 0){
        preco = preco + 2;
        mensagem = "2 Sabores";
    }else if(saboresPizza == 1 && tamanhoPizza == 1 || saboresPizza == 1 && tamanhoPizza == 2 || saboresPizza == 1 && tamanhoPizza == 3){
        preco = preco + 3;
        mensagem = "3 Sabores";
    }else if(saboresPizza == 2 && tamanhoPizza == 2 || saboresPizza == 2 && tamanhoPizza == 3){
        preco = preco + 4;
        mensagem = "4 Sabores"
    }else if(saboresPizza == 3 && tamanhoPizza == 3){
        preco = preco + 5;
        mensagem = "5 Sabores";
    }else{
        mensagem = "Tamanho inválido!";
    }
    resposta2.innerHTML = `${mensagem}`;

    localStorage.setItem('saboresPizza', mensagem);
    localStorage.setItem('precoSabores', preco);

}

//SABOR DA PIZZA
function saborPizza(){
    let sabor1 = document.getElementById("1");
    let sabor2 = document.getElementById("2");
    let sabor3 = document.getElementById("3");
    let sabor4 = document.getElementById("4");
    let sabor5 = document.getElementById("5");
    let mensagem = "";
    let resposta6 = document.getElementById("resposta6");
    let saboresVerif = [];

   if(sabor1.checked){
    saboresVerif.push(sabor1.value);
    mensagem = "Confirmado!";
   }
   
   if(sabor2.checked){
    saboresVerif.push(sabor2.value);
    mensagem = "Confirmado!";
   }
   
   if(sabor3.checked){
    saboresVerif.push(sabor3.value);
    mensagem = "Confirmado!";
   }
   
   if(sabor4.checked){
    saboresVerif.push(sabor4.value);
    mensagem = "Confirmado!";
   }
   
   if(sabor5.checked){
    saboresVerif.push(sabor5.value);
    mensagem = "Confirmado!";
   }

    resposta6.innerHTML = `${mensagem}`;

    localStorage.clear();
    localStorage.setItem('saboresVerif', saboresVerif);

}

//ADICIONAIS DA PIZZA
function adicionaisPizza(){
 let adicional = document.getElementById("adicionaisPizza");
 let adicionalPizza = adicional.selectedIndex;
 let mensagem = "";
 let resposta3 = document.getElementById("resposta3");

 if(adicionalPizza == 0){
    preco = preco + 0;
    mensagem = "Nenhum";
 }else if(adicionalPizza == 1){
    preco = preco + 2;
    mensagem = "Aneis de Cebola";
 }else if(adicionalPizza == 2){
    preco = preco + 2;
    mensagem = "Fatias de Calabresa";
 }else if(adicionalPizza == 3){
    preco = preco + 2;
    mensagem = "Porção de Batata Frita";
 }else{
    preco = preco + 2;
    mensagem = "Porção de Aipim Frito";
 }
 resposta3.innerHTML = `${mensagem}`;

 localStorage.setItem('adicionalPizza', mensagem);
 localStorage.setItem('precoAdicional', preco);
}

//BEBIDAS
function bebidasPizza(){
    let bebida = document.getElementById("bebidasPizza");
    let bebidasPizza = bebida.selectedIndex;
    let mensagem = "";
    let resposta4 = document.getElementById("resposta4");

    if(bebidasPizza == 0){
        mensagem = "Nenhum";
        preco = preco + 0;
    }else if(bebidasPizza == 1 ){
        mensagem = "Guarana Antarctica 2L";
        preco = preco + 9;
    }else if(bebidasPizza == 2){
        mensagem = "Energetico Red-Bull 2L";
        preco = preco + 9;
    }else if(bebidasPizza == 3){
        mensagem = "Coca-Cola 2L"
        preco = preco + 9;
    }else{
        mensagem = "Suco de Laranja 2L";
        preco = preco + 9;
    }
    resposta4.innerHTML = `${mensagem}`;

    localStorage.setItem('bebidaPizza', mensagem);
    localStorage.setItem('precoBebida', preco);
}

//RETIRADA DA PIZZA
function retiradaPizza(){
    let retirada = document.getElementById("retiradaPizza");
    let retiradaPizza = retirada.selectedIndex;
    let mensagem = "";
    let resposta5 = document.getElementById("resposta5");

    if(retiradaPizza == 0){
        mensagem = "Balcao";
    }else{
        mensagem = "Entrega";
        preco = preco + 9;
    }
    resposta5.innerHTML = `${mensagem}`;
    
    localStorage.setItem('retiradaPizza', mensagem);
    localStorage.setItem('precoTotal', preco);
}