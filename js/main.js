const nav = document.querySelector('nav');
const navHeight = () => nav.getBoundingClientRect().height;
let navTop = () => nav.getBoundingClientRect().top;
let scrollPosition = () => window.pageYOffset;
let lastScroll = 0;

window.addEventListener('scroll', () => {

	if (lastScroll < scrollPosition() &&
		navTop() == 0) {
		nav.style.cssText = `top: ${scrollPosition()}px;`
	} else if (navTop() + navHeight() < 0) {
		nav.style.cssText = `top: ${scrollPosition() - navHeight()}px;`
	} else if (navTop() > 0) {
		nav.style.cssText = `position: fixed;`
	}
	lastScroll = scrollPosition();
})
