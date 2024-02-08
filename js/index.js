import { Router } from "./router.js";

const nav = document.querySelector('nav')

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/the-universe', '/pages/the-universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

nav.querySelector('a').addEventListener('click', () => {
  router.route()
})

