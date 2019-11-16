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
					<li class="border-success-400">
					O solucionador <a href="#">	Leandro Marim </a> respondeu ao desafio <router-link to="/desafios/resposta/1/1" >desafio e-commerce </router-link>
					</li>
                    <li class="border-success-400">
					O solucionador <a href="#">	Israel Severino </a> respondeu ao desafio <a href="#">desafio e-commerce </a>
					</li>
                    <li class="border-success-400">
					O solucionador <a href="#">	Julio Rock </a> respondeu ao desafio <a href="#">desafio e-commerce </a>
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
            nome_desafio: null,
            setor: null,
            regras: null,
            requisitos: null,
            premio: null,
            data_expiracao: null
        } 
    },
    methods: {
        async save() {
            let saveData = {
                nome_desafio: this.nome_desafio,
                setor: this.setor,
                regras: this.regras,
                requisitos: this.requisitos,
                premio: this.premio,
                data_expiracao: this.data_expiracao,
                data_criacao: new Date().toJSON().slice(0, 10)

                
            }
            console.log(saveData)
            try {
                let { data }  = await axios.post('/api/desafio/create', saveData)
                if (data.success) {
                    this.$router.push('/desafios')
                } else {
                    console.log('error')
                    PNotify.error(data.message)
                    this.hideLoading()
                }
            } catch (err) {
                console.log(err)
                PNotify.error('Erro ao salvar os dados')
                this.hideLoading()
            }
        },
    }
}
    
</script>