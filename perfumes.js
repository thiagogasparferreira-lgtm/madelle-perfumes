import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAmAkNlrZURAkHHTbpBlbeuUpBnOQWMGzk",
authDomain: "madelle-perfumes.firebaseapp.com",
projectId: "madelle-perfumes"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const whatsapp = "5511999999999";

const catalogo = document.getElementById("catalogo");
const busca = document.getElementById("busca");

let todosPerfumes = [];

function renderizarPerfumes(lista){

catalogo.innerHTML = "";

lista.forEach((p)=>{

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
Consultar Disponibilidade </a>

</div>

</div>
`;

});

}

async function carregarPerfumes(){

const snapshot =
await getDocs(collection(db,"perfumes"));

todosPerfumes = [];

snapshot.forEach((doc)=>{

todosPerfumes.push(doc.data());

});

renderizarPerfumes(todosPerfumes);

}

busca.addEventListener("input", ()=>{

const termo = busca.value.toLowerCase();

const filtrados = todosPerfumes.filter(p =>

p.nome.toLowerCase().includes(termo)

);

renderizarPerfumes(filtrados);

});

carregarPerfumes();
