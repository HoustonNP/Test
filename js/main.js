const nav = document.querySelector('nav');
const navHeight = () => nav.getBoundingClientRect().height;
let navTop = () => nav.getBoundingClientRect().top;
let scrollPosition = () => window.pageYOffset;
let lastScrollDown = 0;
let lastScrollUp = 0;
let lastScroll = 0;

window.addEventListener('scroll', () => {
	if (lastScroll < scrollPosition()) {
		lastScrollDown = scrollPosition()
	} else {
		lastScrollUp = scrollPosition()
	}

	if (lastScroll < scrollPosition() &&
		navTop() == 0) {
		nav.style.cssText = `top: ${lastScrollUp}px;`
	} else if (navTop() + navHeight() < 0) {
		nav.style.cssText = `top: ${lastScrollDown - navHeight()}px;`
	} else if (navTop() > 0) {
		nav.style.cssText = `position: fixed;`
	}

	lastScroll = scrollPosition();
})
