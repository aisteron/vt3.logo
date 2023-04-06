import { qs,loadCSS, onloadCSS } from "../libs"

export const swiper = {
	async load(el){
		return new Promise((resolve,reject) => {
			if(!el) reject(`${el} not found`)

      let script = document.createElement("script")
      script.src = "/vendors/swiper/swiper-bundle.min.js"
      qs(".scripts-area").appendChild(script)

      script.onload = () => {
        let style = loadCSS("/vendors/swiper/swiper-bundle.min.css")
        onloadCSS(style, _ =>  resolve(true) )
      }
    })
	},
	init(root_el){
		
		new Swiper(root_el, {
			autoplay:process.env.NODE_ENV == 'production' && {delay: 2000},
			speed: 1000,
      spaceBetween: 30,
      effect: "fade",
			fadeEffect: { crossFade: true }
    });
	},
	init_test(el){
		let pv = 4
		innerWidth <= 1230 && (pv = 3) 
		innerWidth <= 950 && (pv = 2) 
		innerWidth <= 630 && (pv = 1) 
		new Swiper(el, {
			slidesPerView: pv,
      spaceBetween: 30,
			navigation: {
        nextEl: ".test-next",
        prevEl: ".test-prev",
      }

    });
	},
	init_clients(el,idx){
		let pv = 5
		innerWidth <= 1110 && (pv = 4) 
		innerWidth <= 850 && (pv = 3) 
		innerWidth <= 630 && (pv = 2) 
		innerWidth <= 520 && (pv = 1) 
		new Swiper(el, {
			slidesPerView: pv,
      spaceBetween: 30,
			navigation: {
        nextEl: `.clients_next${idx}`,
        prevEl: `.clients_prev${idx}`,
      }
			

    });
	}
}