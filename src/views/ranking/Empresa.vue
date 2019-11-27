<template>
<div>
    <page-header>
        <span class="text-semibold">Ranking</span>
    </page-header>
    <div class="content">
        <div class="panel panel-flat">
            <div class="panel-body">
                <ul class="media-list" v-for="linha in tabela" :key="linha.nome">
					

					<li class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img v-bind:src="'assets/images/'+linha.img" class="img-circle img-md" alt="">
							</a>
						</div>

						<div class="media-body">
							<div class="media-heading text-semibold">{{linha.nome}}</div>
							<span class="text-muted"><b>Setor:</b> {{linha.setor}}</span>
						</div>
						<div class="media-right">
							<span class="text-muted">{{linha.pontuacao}}</span>
						</div>

						<div class="media-right media-middle">
							<ul class="icons-list text-nowrap">
						        	<li class="dropdown">
						        		<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="icon-menu9"></i></a>

						        		<ul class="dropdown-menu dropdown-menu-right">
										<li><a href="#"><i class="icon-comment-discussion pull-right"></i> Mandar mensagem</a></li>
										<li><a href="#"><i class="icon-phone2 pull-right"></i> Ver número</a></li>
										<li><a href="#"><i class="icon-mail5 pull-right"></i> Ver email</a></li>
										<li class="divider"></li>
										<li><a href="#"><i class="icon-statistics pull-right"></i> Estatisticas</a></li>
									</ul>
						        	</li>
					        	</ul>
						</div>
					</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import PNotify from 'pnotify/dist/es/PNotify'

export default {
    data() {
        return {
            tabela: []
        }
    },
    async created() {
        try {
            this.showLoading()
						let { data } = await axios.get('/api/conteseuproblema/getRanking')
						console.log(data)
            this.tabela = data.data
				}
				catch(err){
					PNotify.err(err)
				}  finally {
            this.hideLoading()
        }
    }
}
</script>
