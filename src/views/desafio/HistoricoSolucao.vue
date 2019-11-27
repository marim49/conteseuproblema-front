<template>
  <div>
    <page-header>
      <span class="text-semibold">Desafio</span> - Historico de Soluções
    </page-header>
    <div class="content">
      <div class="panel panel-flat">
        <div class="panel-body">
            <div class="border-top-blue">
                <ul class="list-feed">
					<li class="border-success-400" v-for="solucao in solucoesDesafio" :key="solucao.coment_id">
					O solucionador <b>{{solucao.tbl_login_log_usr}}</b> respondeu ao desafio <router-link v-bind:to="'/desafios/resposta/'+desafio.id" >{{desafio.desc}} </router-link>
					</li>
				</ul>
		    </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PNotify from 'pnotify/dist/es/PNotify'
import moment from 'moment'

export default {
    data(){
        return{
            solucoesDesafio:[],
            desafio:[]
        } 
    },
    async mounted(){
        try {
            const {data} = await axios.get('/api/conteseuproblema/retornaProblema/'+this.$route.params.id)
            if (!data.error) {
                this.solucoesDesafio = (data.data[0].solucoes.length > 0) ? data.data[0].solucoes : null,
                this.desafio = data.data[0]
            }
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async save() {
            
        },
    }
}
    
</script>