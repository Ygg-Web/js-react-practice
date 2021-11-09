import { Component } from "../core/component";
import { apiService } from "../services/api.service";
import { TransformService } from "../services/transform.service";

export class PostsComponent extends Component {
    constructor(id, { loader }) {
        super(id)
        this.loader = loader
    }

    init() {
        this.elem.addEventListener('click', buttonHandler.bind(this))

    }

    async onShow() {
        this.loader.show()
        const fbData = await apiService.fetchPosts()
        const posts = TransformService.fbObjectToArray(fbData)
        const html = posts.map(post => renderPost(post))
        this.loader.hide()
        this.elem.insertAdjacentHTML('afterbegin', html.join(' '))
    }

    onHide() {
        this.elem.innerHTML = ''
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

function buttonHandler(event) {
    const elem = event.target
    const id = elem.dataset.id
    const post = elem.dataset.post

    if (id) {
        let posts = JSON.parse(localStorage.getItem('posts')) || []
        console.log(posts)
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        console.log(favorites)

        if (favorites.includes(id) || posts.includes(posts)) {
            // удалить элемент
            elem.textContent = 'Сохранить'
            elem.classList.add('button-primary')
            elem.classList.remove('button-danger')

            favorites = favorites.filter(fId => fId !== id)
            posts = posts.filter(fPost => fPost !== post)
        } else {
            // добавить элемент
            elem.textContent = 'Удалить'
            elem.classList.remove('button-primary')
            elem.classList.add('button-danger')

            favorites.push(id)
            posts.push(post)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        localStorage.setItem('posts', JSON.stringify(posts))
    }
}