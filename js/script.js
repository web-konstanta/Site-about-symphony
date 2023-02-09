const humb = document.getElementById('hamb');
const popup = document.getElementById('popup');
const menu = document.getElementById('menu').cloneNode(1);
const body = document.body;

humb.addEventListener('click', hambHandler);

function hambHandler(e) {
	e.preventDefault();
	popup.classList.toggle("open");
	humb.classList.toggle("active");
	body.classList.toggle("noscroll");
	renderPopup();
}

function renderPopup() {
	popup.appendChild(menu);
}