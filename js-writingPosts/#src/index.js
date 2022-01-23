import { startAppComponent } from "./components/startApp.component"
import { sidebarComponent } from "./components/sidebar.component"
import { topComponent } from "./components/top.component"
import { postComponent } from "./components/post.component"
import { favoriteComponent } from "./components/favorite.component"
import "./scss/style.scss"
import { formComponent } from "./components/form.component"
import modalCreateForm from "./templates/modalCreate"


new startAppComponent('startApp')
const sidebar = new sidebarComponent('sidebar')
const form = new formComponent('form')
const modal = modalCreateForm('[data-modal]', 'modal')

const top = new topComponent('top')
const post = new postComponent('post')
const favorite = new favoriteComponent('favorite')

sidebar.registerLinks([
  {name: 'top', component: top},
  {name: 'post', component: post},
  {name: 'favorite', component: favorite}
])