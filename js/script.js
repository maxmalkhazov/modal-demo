const modalBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', displayModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function displayModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

function outsideClick(e) {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
}