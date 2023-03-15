// подключение
/*  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>  */

/*  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>   */

// SCSS SLIDER !!!!!!!!!!!!!!



let swiper = new Swiper('.swiper1', {
	// direction: 'vertical',
    loop: true,
	simulateTouch: true,

	navigation: {
		// <div class="swiper-button-prev"></div>
        // <div class="swiper-button-next"></div>

		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},

	pagination: {
		// <div class="swiper-pagination"></div>

		// точки
		type: 'bullets',
		
		// цифры
		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass) {
		// 	return '0<span class="' + currentClass + '"></span>'+
		// 	'/' +
		// 	'<span class="' + totalClass + '"></span>';
		// },
		
		el:'.swiper-pagination',

        // булеты(можно кликать)
		clickable: true,
		dynamicBullets: true,
	},

	scrollbar: {
		el: '.swiper-scrollbar',

		draggable: true
	},

	// кол-во слайдов
	slidesPerView: 1,
	// отступы
	spaceBetween: 0,

	// breakpoints: {
	// 	320: {
	// 		slidesPerView:1,
	// 	},
	// 	480: {
	// 		slidesPerView:2,
	// 	},
	// 	767.98: {
	// 		slidesPerView:3,
	// 	},
	// 	970: {
	// 		slidesPerView:3,
	// 	}
	// },

});


let mySwiper = new Swiper('.swiper2', {
	// direction: 'vertical',
    loop: true,
	simulateTouch: true,

	navigation: {
		// <div class="swiper-button-prev"></div>
        // <div class="swiper-button-next"></div>

		nextEl: '.swiper-button-prev2',
		prevEl: '.swiper-button-next2'
	},

	pagination: {
		// <div class="swiper-pagination"></div>

		// точки
		type: 'bullets',
		
		// цифры
		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass) {
		// 	return '0<span class="' + currentClass + '"></span>'+
		// 	'/' +
		// 	'<span class="' + totalClass + '"></span>';
		// },
		
		el:'.swiper-pagination',

        // булеты(можно кликать)
		clickable: true,
		dynamicBullets: true,
	},

	scrollbar: {
		el: '.swiper-scrollbar',

		draggable: true
	},

	// кол-во слайдов
	slidesPerView: 1,
	// отступы
	spaceBetween: 60,

	// breakpoints: {
	// 	320: {
	// 		slidesPerView:1,
	// 	},
	// 	480: {
	// 		slidesPerView:2,
	// 	},
	// 	767.98: {
	// 		slidesPerView:3,
	// 	},
	// 	970: {
	// 		slidesPerView:3,
	// 	}
	// },

});

let newSwiper = new Swiper('.swiper3', {
	// direction: 'vertical',
    loop: true,
	simulateTouch: true,

	navigation: {
		// <div class="swiper-button-prev"></div>
        // <div class="swiper-button-next"></div>

		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},

	pagination: {
		// <div class="swiper-pagination"></div>

		// точки
		type: 'bullets',
		
		// цифры
		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass) {
		// 	return '0<span class="' + currentClass + '"></span>'+
		// 	'/' +
		// 	'<span class="' + totalClass + '"></span>';
		// },
		
		el:'.swiper-pagination',

        // булеты(можно кликать)
		clickable: true,
		dynamicBullets: true,
	},

	scrollbar: {
		el: '.swiper-scrollbar',

		draggable: true
	},

	// кол-во слайдов
	slidesPerView: 10,
	// отступы
	spaceBetween: 10,

	breakpoints: {
		300: {
			slidesPerView:1,
			spaceBetween: 0,
		},
		400: {
			slidesPerView:1,
			spaceBetween: 0,
		},
		500: {
			slidesPerView:2,
		},
		600: {
			slidesPerView:3,
		},
		700: {
			slidesPerView:4,
		},
		800: {
			slidesPerView:5,
		},
		1200: {
			slidesPerView:6,
		},
		1300: {
			slidesPerView:7,
		},
		1400: {
			slidesPerView:7,
		},
		1500: {
			slidesPerView:8,
		},
		// 1600: {
		// 	slidesPerView:8,
		// },
		1700: {
			slidesPerView:9,
		},
		1920: {
			slidesPerView:10,
		}
	},

});