import { Component } from "../core/component";
import { apiService } from "../services/api.service";
import { TransformService } from "../services/transform.service";
import { renderPost } from "../templates/post.template";

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
        const html = posts.map(post => renderPost(post, { withButton: true }))
        this.loader.hide()
        this.elem.insertAdjacentHTML('afterbegin', html.join(' '))
    }

    onHide() {
        this.elem.innerHTML = ''
    }
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