 import { Component } from "../core/component";
 import { apiService } from "../services/api.service";
 import { renderPost } from "../templates/post.template";

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

     onHide() {
         this.elem.innerHTML = ''
     }
 }

 async function linkClickHandler(event) {
     event.preventDefault()

     if (event.target.classList.contains('js-link')) {
         const postId = event.target.textContent
         this.elem.innerHTML = ''
         this.loader.show()
         const post = await apiService.fetchPostsById(postId)
         this.loader.hide()
         this.elem.insertAdjacentHTML('afterbegin', renderPost(post, { withButton: false }))
     }
 }

 function renderList(list = []) {
     if (list && list.length) {
         return `
         <ul>
            ${list.map(i => `<li><a href='#' class='js-link'>${i}</a></li>`).join(' ')} 
         </ul>`
     }
     return `<p class="center">Пока ничего не добавлено</p>`
 }