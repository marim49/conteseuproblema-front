import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function filterPfPj(to, from, next) {
    let tipo = to.params.tipo.toUpperCase()
    if (tipo !== 'PF' && tipo !== 'PJ') {
        next('404')
    }
    next()
}

export default new Router({
    routes: [

        {
            path: '/',
            component: require('@/views/Inicio').default,
        },
        {
            path: '/desafios/solucionador',
            component: require('@/views/desafio/Solucionador').default,
        },
        {
            path: '/desafios/empresa',
            component: require('@/views/desafio/Empresa').default,
        },
        {
            path: '/desafios/cadastro',
            component: require('@/views/desafio/Novo').default
        },
        {
            path: '/desafios/inscrever',
            component: require('@/views/desafio/Inscrever').default
        },
        {
            path: '/perfil/empresa',
            component: require('@/views/perfil/Empresa').default
        }, 
        {
            path: '/perfil/solucionador',
            component: require('@/views/perfil/Solucionador').default
        }, 
        {
            path: '/empresa/rank',
            component: require('@/views/ranking/Empresa').default
        },
        {
            path: '/solucionador/rank',
            component: require('@/views/ranking/Solucionador').default
        },
        {
            path: '/gerencial/dashboard',
            component: require('@/views/gerencial/Dashboard').default
        },
        {
            path: '/empresa/premiacoes',
            component: require('@/views/premiacao/Premiacao').default
        },

    ],
})
