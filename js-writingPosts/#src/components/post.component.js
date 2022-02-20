import { Component } from "../core/component"
import { apiService } from "../service/api.service"
import { TransformService } from "../service/transform.service"
export class postComponent extends Component {
  constructor(id){
    super(id)
  }

  init(){
    console.log("post")
    this.el.addEventListener('click', buttonHandler.bind(this))
  }

  async onShow(){
    console.log("show")
    const data = await apiService.fetchPosts()
    const posts = TransformService.fbObjectToArray(data)
    const html = posts.map(post => renderPost(post))

    this.el.insertAdjacentHTML('afterbegin', html.join(' '))

  }

  onHide(){
    console.log('onhide', this.el.innerHTML)
    this.el.innerHTML = ' '
  }
}

function buttonHandler(){
  
}



function renderPost(post){
  const type = `<small>${post.type}</small>`
  return` 
    <div class="post__item">
        <div class="item__header">
            <div class="header__title">${post.title}</div>
            ${type}
        </div>
        <div class="item__body">
            <div class="body__text">${post.fulltext}</div>
            <div class="body__image"></div>
        </div>
        <div class="item__footer">
            <small>${post.time}</small>
            <div class="footer__btn">
                <button class="btn-delete btn">Удалить</button>
                <button class="btn-like btn">Нравится</button>
                <button class="btn-post btn">Опубликовано</button>
            </div>
        </div>
    </div>`
    
}