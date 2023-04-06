import { qs, qsa,log } from "../libs";
import { swiper } from "./swiper";
import { yt } from "./player";
export async function Ui(){

	//masonry()

	await swiper.load(qs('.header-swiper'))
	&& (
		swiper.init(qs('.header-swiper .swiper')),
		swiper.init_test(qs('.swiper.test-swiper')),
		swiper.init_clients1(qs('.swiper.clients-swiper1'))
	)

	await yt.load() && ( yt.init(), yt.observe() )	


	hidden_contacts_footer()

	change_lang_header()

	click_phone_icon_header()

	mobile_menu_header()

	move_more_button()

	
	
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

function change_lang_header(){
	if(!qs('header .lang')){log('header .lang not found'); return}
	
	qs('header .lang .w').addEventListener("click", event => {
		qs('header .lang').classList.toggle('open')
	})

	
	qsa('header .lang ul li').forEach(el => {
		el.addEventListener("click", event => {
			qs('.lang .w label').innerHTML = event.target.dataset.label
			qs('img.selected').setAttribute("src", qs('img', event.target).src)
			qs('header .lang').classList.remove('open')
		})
	})

}

function click_phone_icon_header(){
	if(innerWidth > 940) return
	qsa('header ul.c img').forEach(img => {
		img.addEventListener("click", event => {
			event.target.nextElementSibling.click()
		})
	})

}

function mobile_menu_header(){
	if(!qs('img.burger')) return
	qs('img.burger').addEventListener('click', event => {
		qs('header').classList.toggle('open')
		qs('.mobile_menu').classList.toggle('open')
	})
}

function move_more_button(){
	window.onresize = () => move()
	
	move()
	
	function move(){
		if(innerWidth > 750) return
		if(!qs('.cases section').nextElementSibling 
			|| !qs('.cases section').nextElementSibling.classList[0] == 'yellow') return
		
		qs('.cases .yellow.more').remove()

		qs('#masonry').insertAdjacentHTML('afterend', 
			'<button class="yellow more">Смотреть еще</button>'
		)
	}
}