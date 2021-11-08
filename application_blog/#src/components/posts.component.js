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
        console.log(posts)
    }


}

function renderPost(post) {
    return `
        <div class="panel">
            <div class="panel-head">
                <p class="panel-title">Название поста</p>
                <ul class="tags">
                    <li class="tag tag-blue tag-rounded">Новость</li>
                </ul>
            </div>
            <div class="panel-body">
                <p class="multi-line">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="panel-footer w-panel-footer">
                <small>12.12.12</small>
            </div>
        </div>`
}