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
    const title = elem.dataset.title

    if (id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const candidate = favorites.find(p => p.id === id)

        if (candidate) {
            // удалить элемент
            elem.textContent = 'Сохранить'
            elem.classList.add('button-primary')
            elem.classList.remove('button-danger')

            favorites = favorites.filter(p => p.id !== id)

        } else {
            // добавить элемент
            elem.textContent = 'Удалить'
            elem.classList.remove('button-primary')
            elem.classList.add('button-danger')

            favorites.push({ id, title })
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        localStorage.setItem('posts', JSON.stringify(posts))
    }
}