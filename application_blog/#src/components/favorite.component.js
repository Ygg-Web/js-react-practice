 import { Component } from "../core/component";

 export class FavoriteComponent extends Component {
     constructor(id) {
         super(id)
     }

     init() {
         this.elem.addEventListener('click', linkClickHandler.bind(this))
     }

     onShow() {
         const favorites = JSON.parse(localStorage.getItem('favorites'))
         const html = renderList(favorites)
         this.elem.insertAdjacentHTML('afterbegin', html)
     }
 }

 function linkClickHandler(event) {
     event.preventDefault()

     if (event.target.classList.contains('js-link')) {
         console.log(event.target.textContent)
     }
 }

 function renderList(list = []) {
     if (list.length) {
         return `
         <ul>
            ${list.map(i => `<li><a href='#' class='js-link'>${i}</a></li>`).join(' ')} 
         </ul>`

     }

     return `<p class="center">Пока ничего не добавлено</p>`
 }