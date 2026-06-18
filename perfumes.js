const whatsapp = "5545998046069";

const perfumes = [

{
nome:"Libre YSL",
preco:"R$ 249,90",
imagem:"imagens/Libre YSL.jpeg",
descricao:"Perfume feminino sofisticado e marcante."
},

{
nome:"Good Girl",
preco:"R$ 259,90",
imagem:"imagens/Good Girl.jpeg",
descricao:"Elegância e sensualidade em um único perfume."
},

{
nome:"La Vie Est Belle",
preco:"R$ 249,90",
imagem:"imagens/La Vie Est Belle.jpeg",
descricao:"Doce, feminino e inesquecível."
},

{
nome:"Sauvage Dior",
preco:"R$ 279,90",
imagem:"imagens/Sauvage Dior.jpeg",
descricao:"Um dos masculinos mais vendidos do mundo."
},

{
nome:"Invictus",
preco:"R$ 239,90",
imagem:"imagens/Invictus.jpeg",
descricao:"Fresco, potente e extremamente versátil."
}

];

const catalogo = document.getElementById("catalogo");

perfumes.forEach(p => {

catalogo.innerHTML += `
<div class="card">

<img src="${p.imagem}" alt="${p.nome}">

<div class="card-content">

<h2>${p.nome}</h2>

<div class="preco">${p.preco}</div>

<p>${p.descricao}</p>

<a
class="botao"
target="_blank"
href="https://wa.me/${whatsapp}?text=Olá,%20tenho%20interesse%20no%20perfume%20${encodeURIComponent(p.nome)}">
Consultar Disponibilidade
</a>

</div>

</div>
`;

});
