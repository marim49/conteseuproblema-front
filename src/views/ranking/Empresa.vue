<template>
<div>
    <page-header>
        <span class="text-semibold">Rank</span>
    </page-header>
    <div class="content">
        <div class="panel panel-flat">
            <div class="panel-body">
                <ul class="media-list">
					<li class="media-header text-muted">Solucionadores Destaque</li>

					<li class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img src="assets/images/placeholder.jpg" class="img-circle img-md" alt="">
							</a>
						</div>

						<div class="media-body">
							<div class="media-heading text-semibold">Leandro Marim</div>
							<span class="text-muted">Desenvolvedor</span>
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
            let { data } = await axios.get('/api/professor/professor')
            this.tabela = data
        } catch (err) {
            PNotify.error('Erro ao obter dados do servidor. Tente novamente mais tarde.')
        } finally {
            this.hideLoading()
        }
    }
}
</script>
