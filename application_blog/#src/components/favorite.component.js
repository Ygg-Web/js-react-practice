 import { Component } from "../core/component";
 import { apiService } from "../services/api.service";
 export class FavoriteComponent extends Component {
     constructor(id, { loader }) {
         super(id)
         this.loader = loader
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

 async function linkClickHandler(event) {
     event.preventDefault()

     if (event.target.classList.contains('js-link')) {
         const postId = event.target.textContent

         this.loader.show()

         const post = await apiService.fetchPostsById(postId)
         this.loader.hide()

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