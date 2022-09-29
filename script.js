function openNav(){
	// slider.classList.add('navMobileOpen');
	slider.style.top = '80px';
}

function closeNav() {
	slider.style.top = '-1000px';
}

let slider = document.getElementById('slider');
let mainNavbar = document.getElementById('main');

mainNavbar.addEventListener('click', () => {
	openNav();
});