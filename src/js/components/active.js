const list = document.querySelectorAll('.header__link');
list.forEach((item) => {
	item.addEventListener('click', () => {
		list.forEach((el) => {
			el.classList.remove('is-active');
		});
		item.classList.add('is-active');
	});
});
