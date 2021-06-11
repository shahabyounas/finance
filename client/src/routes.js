import Landing from "./pages/landing"
import Home from "./pages/home"

const routes = [
    {
        name: 'Landing',
        path: '/',
        component: Landing
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
    }
]

export default routes;