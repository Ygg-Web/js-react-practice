 import { Component } from "../core/component";

 export class FavoriteComponent extends Component {
     constructor(id) {
         super(id)
     }

     onShow() {
         const favorites = JSON.parse(localStorage.getItem('favorites'))
         const html = renderList(favorites)
         this.elem.insertAdjacentHTML('afterbegin', html)
     }
 }

 function renderList(list = []) {
     if (list.length) {

     }

     return `<p class="center">Пока ничего не добавлено</p>`
 }