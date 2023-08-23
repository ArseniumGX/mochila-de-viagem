const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("items")) || [];

itens.forEach((element) => {
	criaElemento(element);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = e.target.elements["nome"];
	const quantidade = e.target.elements["quantidade"];

	const item = {
		nome: nome.value,
		quantidade: quantidade.value,
	};

	itens.push(item);

	localStorage.setItem("items", JSON.stringify(itens));

	criaElemento(item);

	e.target.elements["nome"].value = "";
	e.target.elements["quantidade"].value = "";
});

function criaElemento(item) {
	const novoItem = document.createElement("li");
	novoItem.classList.add("item");

	const numeroItem = document.createElement("strong");
	numeroItem.innerHTML = item.quantidade;

	novoItem.appendChild(numeroItem);
	novoItem.innerHTML += item.nome;

	lista.appendChild(novoItem);
}
