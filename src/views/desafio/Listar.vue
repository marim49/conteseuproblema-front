<template>
<div>
    <page-header>
        <span class="text-semibold">Desafios</span>
        <div slot="heading-elements"
            class="heading-btn-group">
            <router-link to="/desafios/cadastro"
                class="btn btn-warning">
                <i class=" icon-atom2 position-left"></i>
                <span>Cadastrar desafio</span>
            </router-link>
        </div>
    </page-header>
    <div class="content">
        <div class="panel panel-flat">
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nome do desafio</th>
                                <th>Setor</th>
                                <th>Prêmio</th>
                                <th>Prazo final</th>
                                <th style="text-align: center;">Status</th> 
                                <th style="text-align: center;">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="linha in tabela"
                                :key="linha.id">
                                <td>{{ linha.desc }}</td>
                                <td>{{ linha.setor}}</td>
                                <td>{{ linha.premiacao }}</td>
                                <td>{{ linha.prazo | formatDate }}</td>
                                <td style="text-align: center;"><span class="label label-success">Ativo</span></td>
                                <td><div style="text-align: center; vertical-align: middle" class="align-middle">
                                       <div class="btn-group btn-group-sm" role="group" aria-label="Ações">
                                            <router-link v-bind:to="'/desafios/inscrever/'+linha.id" class="btn btn-success icon-enter2" role="button" data-toggle="tooltip" data-placement="top" title="Entrar em desafio"></router-link>
                                            <router-link v-bind:to="'/desafios/visualizar/'+linha.id" class="btn btn-primary icon-eye4" role="button" data-toggle="tooltip" data-placement="top" title="Visualizar desafio"></router-link>
                                            <router-link v-bind:to="'/desafios/historico/'+linha.id" class="btn btn-info icon-bubbles10" role="button" data-toggle="tooltip" data-placement="top" title="Solucoes do desafio"></router-link>
                                            <router-link v-bind:to="'/desafios/editar/'+linha.id" class="btn btn-warning icon-pencil5" role="button" data-toggle="tooltip" data-placement="top" title="Editar desafio"></router-link>
                                            <button class="btn btn-danger icon-cancel-circle2" id="sweet_warning" role="button" data-toggle="tooltip" data-placement="top" title="Excluir desafio" v-on:click="deletar(linha.id)"></button>
                                        </div>
                                    </div>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
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
            let  { data }  = await axios.get('/api/conteseuproblema/retornaProblema')
            if (data.error) {
                this.$swal.fire({text: data.msg, type: 'error', timer: 1200})
            }
            this.tabela = data.data
        } catch (err) {
            PNotify.error(err.msg)
        } finally {
            this.hideLoading()
        }
    },
    methods:{
        async deletar(id) {
                try {
                    const {data} = await axios.delete('/api/conteseuproblema/deletarProblema/'+id)
                    if (!data.error) {
                        this.$swal.fire({text: data.msg, type: 'success', timer:1200})
                        location.reload(true)
                    } else {
                        this.$swal.fire({text: data.msg, type: 'error', timer:1200})
                    }
                } catch (error) {
                    console.log(error)
                }
        }
    }
}
</script>
