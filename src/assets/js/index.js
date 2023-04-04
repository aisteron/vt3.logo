import {Ui} from './ui/index.js'

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init);

function init(){
	Ui()
}