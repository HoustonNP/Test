const nav = document.querySelector('nav');
const navHight = nav.offsetHeight;
const scrollTop = window.pageYOffset;
let scrollPosition = () => window.pageYOffset;
let lastScrollDown = 0
let lastScrollUp = 0
let lastScroll = 0;

window.addEventListener('scroll', () => {

	if (lastScroll < scrollPosition()) {
		lastScrollDown = scrollPosition();
		nav.style.cssText = `top: ${lastScrollUp}px`;
	} else if (lastScroll > scrollPosition() &&
		lastScrollDown - navHight < scrollPosition() &&
		lastScrollDown > navHight) {
		lastScrollUp = scrollPosition();
		nav.style.cssText = `top: ${lastScrollDown - navHight}px`;
	} else if (lastScroll > scrollPosition() &&
		lastScrollDown > navHight) {
		lastScrollUp = scrollPosition();
		nav.style.cssText = `position: fixed;`;
	}

	lastScroll = scrollPosition();

	console.log('lastScroll: ' + lastScroll);
	console.log('lastScrollUp: ' + lastScrollUp);
	console.log('lastScrollDown: ' + lastScrollDown);
})