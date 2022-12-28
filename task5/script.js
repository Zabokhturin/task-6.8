let userTextField = document.querySelector('#duplicateField');
let userText = document.querySelector('input');

userText.addEventListener('input', (event) => {
    userTextField.textContent = event.target.value;
})

document.querySelector('button').addEventListener('click', Moveconsol)

function Moveconsol(){
	console.log(userText.value);
    userText.value = "";
    userTextField.textContent = "";
}