function progressBar() {
	let scroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let button = document.querySelector('.up-button');
	let scrolled = Math.round(scroll / height * 100);
	let percent = document.querySelector('.percent');
	let arrow = document.querySelector('.arrow');
	const circle = document.querySelector('.progress-ring__active');
	const circleDefault = document.querySelector('.progress-ring__default');
	const circleMobile = document.querySelector('.progress-ring__active--mobile');
	const circleDefaultMobile = document.querySelector('.progress-ring__default--mobile');
	const radius = circle.r.baseVal.value;
	const circumference = 2 * Math.PI * radius;
	const radiusMobile = circleMobile.r.baseVal.value;
	const circumferenceMobile = 2 * Math.PI * radiusMobile;
	// eslint-disable-next-line no-useless-concat
	percent.innerHTML = `${scrolled}` + ' %';
	if (scrolled === 100) {
		percent.classList.add('is-none');
		arrow.classList.add('is-visible');
		button.classList.add('is-active');
	} else {
		percent.classList.remove('is-none');
		arrow.classList.remove('is-visible');
		button.classList.remove('is-active');
	}
	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = circumference;
	circleDefault.style.strokeDasharray = `${circumference} ${circumference}`;
	circleDefault.style.strokeDashoffset = circumference;
	circle.style.stroke = '#D2233C';
	circleMobile.style.strokeDasharray = `${circumferenceMobile} ${circumferenceMobile}`;
	circleMobile.style.strokeDashoffset = circumferenceMobile;
	circleDefaultMobile.style.strokeDasharray = `${circumferenceMobile} ${circumferenceMobile}`;
	circleDefaultMobile.style.strokeDashoffset = circumferenceMobile;
	circleMobile.style.stroke = '#D2233C';
	function setProgress(percentCircle) {
		circle.style.strokeDashoffset = circumference - percentCircle / 100 * circumference;
		circleDefault.style.strokeDashoffset = circumference - circle.style.strokeDashoffset;
		circleMobile.style.strokeDashoffset = circumferenceMobile - percentCircle / 100 * circumferenceMobile;
		circleDefaultMobile.style.strokeDashoffset = circumferenceMobile - circleMobile.style.strokeDashoffset;
	}
	setProgress(scrolled);
}

window.addEventListener('scroll', progressBar);
