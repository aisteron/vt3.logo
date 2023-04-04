import { qs } from "../libs";
import { swiper } from "./swiper";


export async function Ui(){

	await swiper.load(qs('.header-swiper'))
	&& swiper.init(qs('.header-swiper .swiper'))

}