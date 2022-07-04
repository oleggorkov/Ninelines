// eslint-disable-next-line func-names
window.onload = function () {
	setTimeout(() => {
		let preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 2000);
};
