import { qs } from "../libs"
export async function load_yt_player(){
	return new Promise(resolve => {
		let script = document.createElement("script")
		script.src="https://www.youtube.com/iframe_api"
		qs(".scripts-area").appendChild(script)
		script.onload = () => resolve(true)
	})
}
export function init_load_yt_player(){


	window.YT.ready(function() {
		new window.YT.Player("player", {
			height: "945",
			width: "945",
			videoId: "M7lc1UVf-VE",
			playerVars: {
        autoplay: 0,
        loop: 1,
        mute: 1
      },
			events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
		});
	});

	function onPlayerReady(event){
		const playerReady = new CustomEvent("yt", {
			detail: {obj: event.target},
		});
		document.dispatchEvent(playerReady)
	}

	function onPlayerStateChange(event) {
		var videoStatuses = Object.entries(window.YT.PlayerState);
		console.log(videoStatuses.find((status) => status[1] === event.data)[0]);
	}
}
export function yt_observer(){

	let player;
	document.addEventListener('yt', e => player = e.detail.obj)


	const observer = new IntersectionObserver((entries, observer) => {
		entries[0].isIntersecting && player.playVideo()
	}, { threshold: 0.5 })

	

	observer.observe(qs('.process'))

}