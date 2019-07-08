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
            path: '/ensalamento',
            component: require('@/views/ensalamento/Index').default,
        },
        {
            path: '/professores',
            component: require('@/views/professor/Index').default,
        },
        {
            path: '/salas',
            component: require('@/views/sala/Index').default,
        },
        {
            path: '/turmas',
            component: require('@/views/turma/Index').default,
        },   
        {
            path: '/cadastro/professor',
            component: require('@/views/professor/Novo').default
        }, 
        

    ],
})
