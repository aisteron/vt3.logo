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
		new Swiper(el, {
			slidesPerView: 4,
      spaceBetween: 30,
			navigation: {
        nextEl: ".test-next",
        prevEl: ".test-prev",
      }

    });
	}
}