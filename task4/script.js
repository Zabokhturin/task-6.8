
let link = document.querySelector('a');
link.addEventListener('click', CangeLink);

function CangeLink(){
	let name = prompt('Введите текст');
	link.textContent = name;
}