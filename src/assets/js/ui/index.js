import { qs, qsa } from "../libs";
import { swiper } from "./swiper";
import { load_yt_player, init_load_yt_player, yt_observer } from "./player";
export async function Ui(){

	await swiper.load(qs('.header-swiper'))
	&& (
		swiper.init(qs('.header-swiper .swiper')),
		swiper.init_test(qs('.swiper.test-swiper'))
		)

	await load_yt_player()
	init_load_yt_player()
	yt_observer()

	hidden_contacts_footer()
	
}


function hidden_contacts_footer(){
	qsa('footer .hidden').forEach(el => {
		el.addEventListener('click', event => {
			let data = event.target.dataset.content
			event.target.innerHTML = data
			event.target.classList.add('opened')
		})
	})
}