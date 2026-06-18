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

async function carregarPerfumes(){

const snapshot =
await getDocs(collection(db,"perfumes"));

snapshot.forEach((doc)=>{

const p = doc.data();

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

}

carregarPerfumes();
