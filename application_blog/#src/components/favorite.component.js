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
         this.elem.insertAdjacentHTML('afterbegin', renderPost(post))
     }
 }

 function renderPost(post) {
     const tag = post.type === 'news' ?
         `<li class="tag tag-blue tag-rounded">Новость</li>` :
         `<li class="tag tag-rounded">Заметка</li>`

     const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) ?
         `<button class="button-round button-small button-danger" data-id="${post.id}" data-post="${post.title}">Удалить</button>` :
         `<button class="button-round button-small button-primary" data-id="${post.id}" data-post="${post.title}">Сохранить</button>`

     return `
        <div class="panel">
            <div class="panel-head">
                <p class="panel-title">${post.title}</p>
                <ul class="tags">
                    ${tag}
                </ul>
            </div>
            <div class="panel-body">
                <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
                <small>${post.date}</small>
                ${button}
            </div>
        </div>`
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