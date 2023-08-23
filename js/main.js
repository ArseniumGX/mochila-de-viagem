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

	const exists = itens.find((element) => element.nome === nome.value.trim());
	const item = {
		nome: nome.value.trim(),
		quantidade: +quantidade.value,
	};

	if (exists) {
		item.id = exists.id;
		atualizaElemento(item);
	} else {
		item.id = itens.length;
		criaElemento(item);
		itens.push(item);
	}

	localStorage.setItem("items", JSON.stringify(itens));

	e.target.elements["nome"].value = "";
	e.target.elements["quantidade"].value = "";
});

function criaElemento(item) {
	const novoItem = document.createElement("li");
	novoItem.classList.add("item");

	const numeroItem = document.createElement("strong");
	numeroItem.dataset.id = item.id;
	numeroItem.innerHTML = item.quantidade;

	novoItem.innerHTML += item.nome;
	novoItem.appendChild(numeroItem);

	lista.appendChild(novoItem);
}

function atualizaElemento(item) {
	document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
}
