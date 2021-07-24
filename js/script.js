const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');

	for (i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
		items[i].querySelector('.btn-fill').innerHTML = 'Open';
	}

	if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
		this.querySelector('.btn-fill').innerHTML = 'Close';
	}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
