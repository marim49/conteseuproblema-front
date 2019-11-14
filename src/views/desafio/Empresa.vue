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
                                <th style="text-align: center;">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="linha in tabela"
                                :key="linha.id">
                                <td>{{ linha.nome }}</td>
                                <td></td>
                                <td>{{ linha.premio }}</td>
                                <td>{{ linha.prazo | formatDate }}</td>
                                <td><div style="text-align: center; vertical-align: middle" class="align-middle">
                                       <div class="btn-group btn-group-sm" role="group" aria-label="Ações">
                                           <router-link to="/desafios/cadastro" class="btn btn-success icon-enter2" role="button" data-toggle="tooltip" data-placement="top" title="Entrar em desafio"></router-link>
                                           <a class="btn btn-info icon-file-eye2" role="button" data-toggle="tooltip" data-placement="top" title="Visualizar detalhes do desafio"> </a>
                                           <a class="btn btn-primary icon-pencil5" role="button" data-toggle="tooltip" data-placement="top" title="Editar desafio"></a>
                                           <button class="btn btn-danger icon-cancel-circle2" id="sweet_warning" role="button" data-toggle="tooltip" data-placement="top" title="Excluir desafio"></button>
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
            let { data } = await axios.get('/api/desafio/list')
            this.tabela = data
        } catch (err) {
            PNotify.error('Erro ao obter dados do servidor. Tente novamente mais tarde.')
        } finally {
            this.hideLoading()
        }
    }
}
</script>
