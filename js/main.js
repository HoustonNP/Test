const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;
let navTop = () => nav.getBoundingClientRect().top;
let scrollPosition = () => window.pageYOffset;
let lastScrollDown = 0;
let lastScrollUp = 0;
let lastScroll = 0;

window.addEventListener('scroll', () => {
	if (lastScroll < scrollPosition() &&
		navTop() == 0) {
		nav.style.cssText = `top: ${lastScrollUp}px;`
	}
	if (lastScroll > scrollPosition() &&
		navTop() + navHeight < 0) {
		nav.style.cssText = `top: ${lastScrollDown - navHeight}px;`
	}
	if (lastScroll > scrollPosition() &&
		navTop() >= 0) {
		nav.style.cssText = `position: fixed;`
	}
	if (lastScroll < scrollPosition()) {
		lastScrollDown = scrollPosition()
	}
	if (lastScroll > scrollPosition()) {
		lastScrollUp = scrollPosition()
	}
	lastScroll = scrollPosition();
})
