let valorCompra = Number(prompt("Digite o valor da compra:"));
if (valorCompra >= 100) {
   let desconto = valorCompra * 0.10;
   let valorTotal = valorCompra - desconto;
   alert("Você ganhou 10% de desconto!");
   alert("Valor do desconto: R$" + desconto);
   alert("Valor total: R$" + valorTotal);
}