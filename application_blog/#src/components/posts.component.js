import { Component } from "../core/component";
import { apiService } from "../services/api.service";
import { TransformService } from "../services/transform.service";

export class PostsComponent extends Component {
    constructor(id) {
        super(id)
    }

    async onShow() {
        const fbData = await apiService.fetchPosts()
        const posts = TransformService.fbObjectToArray(fbData)
        const html = posts.map(post => renderPost(post))
        this.elem.insertAdjacentHTML('afterbegin', html.join(' '))
        console.log(posts)
    }


}

function renderPost(post) {
    return `
        <div class="panel">
            <div class="panel-head">
                <p class="panel-title">${post.title}</p>
                <ul class="tags">
                    <li class="tag tag-blue tag-rounded">${post.type}</li>
                </ul>
            </div>
            <div class="panel-body">
                <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
                <small>${post.date}</small>
            </div>
        </div>`
}