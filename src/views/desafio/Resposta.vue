<template>
  <div>
    <page-header>
      <span class="text-semibold">Desafio</span> - Resposta ao desafio
    </page-header>
    <div class="content">
      <div class="panel panel-flat timeline-content">
		  <div class="panel-heading breadcrumb-line">
				<h2 class="panel-title text-center">{{desafio.desc}}</h2>
				<br>
				<div class="text-center"> {{desafio.regras}} </div>
		  </div>
			<div class="panel-body">
				<br>
				<ul class="media-list chat-list content-group">
					<li class="media date-step">
						<span>Soluções enviadas</span>
					</li>
					<li class="media reversed" v-for="solucao in solucoesDesafio" :key="solucao.coment_id">
						<div class="media-body">
							<div class="media-content">{{solucao.coment_desc}}</div>
							<span class="media-annotation display-block mt-10"> <a title="eleger como ganhador" v-on:click="solucaoGanhadora(solucao.coment_id)"><i class="btn btn-success position-right icon-checkmark4"></i></a> <a title="recusar solução"  v-on:click="solucaoPerdedora(solucao.coment_id)"><i class="btn btn-danger icon-blocked position-right text-muted"></i></a></span>
						</div>
						<div class="media-right">
							<a href="assets/images/placeholder.jpg">
								<img src="assets/images/placeholder.jpg" class="img-circle img-md" alt="">
							</a>
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
import moment from 'moment'

export default {
   data(){
		 return {
			 solucoesDesafio:[],
			 desafio:[]
		 }
	 },
	 async mounted(){
		 	try {
				 const {data} = await axios.get('/api/conteseuproblema/retornaProblema/'+this.$route.params.id)
				 console.log('pagina resposta',data)
				 if (!data.error) {
                this.solucoesDesafio = (data.data[0].solucoes.length > 0) ? data.data[0].solucoes : null,
                this.desafio = data.data[0]
            }
			 } catch (error) {
				 console.log(error)
			 }
	 },
	 methods:{
		 async solucaoGanhadora(id){
			 try {
				 this.$swal.fire({
					 type:'warning',
					 title:'Atenção',
					 text:'Deseja escolher essa solução como ganhadora',
					 showCancelButton: true
					 }).then(async(result)=>{
						 if (result.value){
							 const {data} = await axios.put('/api/conteseuproblema/solucaoGanhadora/'+id)
							 console.log(data)
							 if (!data.error) {
								 this.$swal.fire({
									 type:'success',
									 text:'Solução escolhida com sucesso!',
									 timer:1000
								 })
							 }
						 }
					 })
			 } catch (error) {
				 console.log(error)
			 }
		 },
		 async solucaoPerdedora(id){
			 try {
				 this.$swal.fire({
					 type:'warning',
					 title:'Atenção',
					 text:'Deseja escolher essa solução como não participante',
					 showCancelButton: true
					 }).then(async(result)=>{
						 if (result.value){
							 const {data} = await axios.put('/api/conteseuproblema/solucaoPerdedora/'+id)
							 console.log(data)
							 if (!data.error){
								 this.$swal.fire({
										 type:'success',
										 text:'Solução escolhida com sucesso!',
										 timer:1000
									 })
							 }
						 }
					 })
			 } catch (error) {
				 console.log(error)
			 }
		 }
	 }
}
    
</script>