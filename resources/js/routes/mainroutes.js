/*
Pues la idea cogida de Xercos, que fue un sitio donde las rutas se nos fue de las manos.
Puede ser que cada vista principal tenga su fichero de rutas, por ejemplo un CRUD de un maestro, con su arbol de rutas, la principal y sus hijos.
Y aqui solo poner la importación por ejemplo
import usersRoutes from '@/routes/users_routes'

Y luego usarlo al estilo (esto hace un merge de rutas.)
  ...usersRoutes,

*/
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import ErrorNoFoundPage from '@/views/ErrorNoFoundPage.vue'

export default [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'login',
    component: Dashboard,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/forgot_password',
    name: 'forgot_password',
    component: ForgotPassword,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: ErrorNoFoundPage,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },

]
