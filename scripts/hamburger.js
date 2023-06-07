const burgerMenu = document.querySelector('.burger-menu')
let burgerOpen = false
burgerMenu.addEventListener('click', () => {
	if(!burgerOpen) {
		burgerMenu.classList.add('open')
		burgerOpen = true
	} 
	else {
		burgerMenu.classList.remove('open')
		burgerOpen = false
	}
})