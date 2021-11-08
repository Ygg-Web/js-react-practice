import { Component } from "../core/component";
import { apiService } from "../services/api.service";

export class PostsComponent extends Component {
    constructor(id) {
        super(id)
    }

    onShow() {
        console.log('posts init')
    }
}