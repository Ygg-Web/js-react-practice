import { startAppComponent } from "./components/startApp.component"
import { sidebarComponent } from "./components/sidebar.component"
import { topComponent } from "./components/top.component"
import { createComponent } from "./components/create.component"
import { postComponent } from "./components/post.component"
import { favoriteComponent } from "./components/favorite.component"
import "./scss/style.scss"


new startAppComponent('startApp')
new sidebarComponent('sidebar')
new topComponent('top')
new createComponent('create')
new postComponent('post')
new favoriteComponent('favorite')