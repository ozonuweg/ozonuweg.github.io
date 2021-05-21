const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const unordered = document.querySelector('.list');

button.addEventListener('click', () => {
if (input.value != ''){
	
	let li = document.createElement('li');
	let deletebutton = document.createElement('button');
	
	li.textContent = input.value;
	deletebutton.textContent = '❌';
	li.append(deletebutton);
	unordered.append(li);
	
	deletebutton.addEventListener('click', function(){
		unordered.removeChild(li);
		input.focus;
	})
	
	input.value='';
	input.focus;
}
		
});