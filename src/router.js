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
			path: '/desafios/listar',
			component: require('@/views/desafio/Listar').default,
		},
		{
			path: '/desafios/cadastro',
			component: require('@/views/desafio/Novo').default
		},
		{
			path: '/desafios/inscrever/:id',
			component: require('@/views/desafio/Inscrever').default
		},
		{
			path: '/desafios/visualizar/:id',
			component: require('@/views/desafio/Visualizar').default
		},
		{
			path: '/desafios/editar/:id',
			component: require('@/views/desafio/Editar').default
		},
		{
			path: '/desafios/historico/:id',
			component: require('@/views/desafio/HistoricoSolucao').default
		},
		{
			path: '/desafios/resposta/:id/:idSolucionador',
			component: require('@/views/desafio/Resposta').default
		},
		{
			path: '/perfil/empresa',
			component: require('@/views/perfil/Empresa').default
		},
		{
			path: '/perfil/visualizar',
			component: require('@/views/perfil/Visualizar').default
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
