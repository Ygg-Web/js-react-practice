import { startAppComponent } from "./components/startApp.component"
import { sidebarComponent } from "./components/sidebar.component"
import { topComponent } from "./components/top.component"
import { createComponent } from "./components/create.component"
import { postComponent } from "./components/post.component"
import { favoriteComponent } from "./components/favorite.component"
import "./scss/style.scss"


new startAppComponent('startApp')
const sidebar = new sidebarComponent('sidebar')
const create = new createComponent('create')


const top = new topComponent('top')
const post = new postComponent('post')
const favorite = new favoriteComponent('favorite')

sidebar.registerLinks([
  {name: 'top', component: top},
  {name: 'post', component: post},
  {name: 'favorite', component: favorite}
])