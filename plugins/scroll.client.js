;(function currentScroll() {
	const page = document.querySelector('#page')
	const header = document.querySelector('#header')
	const hamburger = document.querySelector('.hamburger')
	

	if (hamburger.classList.contains('active')) {
		page.style.paddingTop = `${0}px`
	} else {
		page.style.paddingTop = `${header.clientHeight}px`
	}

	// window.addEventListener('resize', () => {
	// 	page.style.paddingTop = `${header.clientHeight}px`
	// })
})()


const header = document.querySelector('#header')
const lastScroll = header.clientHeight

window.addEventListener('scroll', () => {
	
	const currentScroll = window.pageYOffset
	if (
		currentScroll > this.lastScroll &&
		!document.body.classList.contains('scroll-down')
	) {
		document.body.classList.add('scroll-down')
	} else if (
		currentScroll < this.lastScroll &&
		document.body.classList.contains('scroll-down')
	) {
		document.body.classList.remove('scroll-down')
	}

	this.lastScroll = currentScroll
})
