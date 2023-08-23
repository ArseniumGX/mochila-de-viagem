const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = [];

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = e.target.elements["nome"];
	const quantidade = e.target.elements["quantidade"];

	criaElemento(nome.value, quantidade.value);

	e.target.elements["nome"].value = "";
	e.target.elements["quantidade"].value = "";
});

function criaElemento(nome, quantidade) {
	const novoItem = document.createElement("li");
	novoItem.classList.add("item");

	const numeroItem = document.createElement("strong");
	numeroItem.innerHTML = quantidade;

	novoItem.appendChild(numeroItem);
	novoItem.innerHTML += nome;

	lista.appendChild(novoItem);

	const itemAtual = {
		nome,
		quantidade,
	};

	itens.push(itemAtual);

	localStorage.setItem("items", JSON.stringify(itens));
}
