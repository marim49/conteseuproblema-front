<template>
<div>
    <page-header>
        <span class="text-semibold">Desafios</span>
        <div slot="heading-elements"
            class="heading-btn-group">
            <router-link to="/desafios/cadastro"
                class="btn btn-primary">
                <i class="icon-books position-left"></i>
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
                                <th>Nome desafio</th>
                                <th>prazo final</th>
                                <th>prêmio</th>
                                <th style="text-align: center;">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="linha in tabela"
                                :key="linha.id">
                                <td>{{ linha.nome }}</td>
                                <td>{{ linha.prazo | formatDate }}</td>
                                <td>{{ linha.premio }}</td>
                                <td><div style="text-align: center; vertical-align: middle" class="align-middle">
                                       <div class="btn-group btn-group-sm" role="group" aria-label="Ações">
                                           <a class="btn btn-info icon-file-eye2" role="button"> </a>
                                           <a class="btn btn-primary icon-pencil5" role="button"></a>
                                           <button class="btn btn-danger icon-cancel-circle2" id="sweet_warning" role="button"></button>
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
