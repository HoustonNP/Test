const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;
let scrollPosition = () => window.pageYOffset;
let lastScrollDown = 0;
let lastScrollUp = 0;
let lastScroll = 0;

window.addEventListener('scroll', () => {

	if (lastScroll < scrollPosition() &&
		lastScrollUp + navHeight < lastScrollDown) {
		nav.style.cssText = `top: ${lastScrollUp}px;`
	}
	if (lastScroll > scrollPosition() &&
		lastScrollDown - navHeight > lastScrollUp) {
		nav.style.cssText = `top: ${lastScrollDown - navHeight}px;`
	}
	if (lastScroll > scrollPosition() &&
		lastScrollDown !== lastScroll &&
		lastScrollDown - navHeight >= scrollPosition()) {
		nav.style.cssText = `position: fixed;`
	}

	if (lastScroll < scrollPosition()) {
		lastScrollDown = scrollPosition()
	} else {
		lastScrollUp = scrollPosition()
	}

	lastScroll = scrollPosition()
})
