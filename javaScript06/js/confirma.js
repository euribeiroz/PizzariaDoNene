function dadosUsuario(){
    let nomeCliente = localStorage.getItem('nomeCliente');
    let enderecoCliente = localStorage.getItem('enderecoCliente');
    let emailCliente = localStorage.getItem('emailCliente');
    let telefoneCliente = localStorage.getItem('telefoneCliente');

    document.getElementById('nome').innerHTML = nomeCliente;
    document.getElementById('endereco').innerHTML = enderecoCliente;
    document.getElementById('email').innerHTML = emailCliente;
    document.getElementById('telefone').innerHTML = telefoneCliente;
}

function pedido(){
    let tamanhoPizza = localStorage.getItem('tamanhoPizza');
    let saboresPizza = localStorage.getItem('saboresPizza');
    let saborPizza = localStorage.getItem('saboresVerif');
    let adicionalPizza = localStorage.getItem('adicionalPizza');
    let bebidaPizza = localStorage.getItem('bebidaPizza');
    let retiradaPizza = localStorage.getItem('retiradaPizza');
    let precoTotal = localStorage.getItem('precoTotal');

    document.getElementById('tamanho').innerHTML = tamanhoPizza;
    document.getElementById('sabores').innerHTML = saboresPizza;
    document.getElementById('sabor').innerHTML = saborPizza;
    document.getElementById('adicional').innerHTML = adicionalPizza;
    document.getElementById('bebida').innerHTML = bebidaPizza;
    document.getElementById('retirada').innerHTML = retiradaPizza;
    document.getElementById('precoTotal').innerHTML = precoTotal;
}