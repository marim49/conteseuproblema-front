<template>
  <div>
    <page-header>
      <span class="text-semibold">Desafio</span> - Editar
    </page-header>
    <div class="content">
      <div class="panel panel-flat">
        <div class="panel-body">
          <form class="form-horizontal">
            <fieldset class="content-group">
              <legend class="text-semibold">Informações</legend>

              <control-wrapper label="Nome:">
                <input
                  type="text"
                   value="Desafio e-commerce"
                  class="form-control"
                  placeholder="Insira o nome do desafio"
                  v-model="nome_desafio"
                 
                >
              </control-wrapper>
              <control-wrapper label="Setor:">
                <select
                  class="form-control"
                  v-model="setor"
                >
                <option value="desenvolvimento" selected>Desenvolvimento</option>
                </select>
              </control-wrapper>
              <control-wrapper label="Descrição do desafio:">
                <textarea
                  type="textarea"
                  class="form-control"
                  placeholder="Insira aqui toda a informação referente ao desafio para que possa ser solucionado"
                  v-model="requisitos"
                  value="aaaa"
                ></textarea>
              </control-wrapper>
              <control-wrapper label="Tipo de prêmio:">
                <select
                  class="form-control"
                >
                <option value="1" selected>Dinheiro</option>
                <option value="2">Emprego</option>
                </select>
              </control-wrapper>
              <control-wrapper label="Prêmio:">
                <textarea
                  type="textarea"
                  class="form-control"
                  placeholder="Insira aqui o prêmio para o desafio"
                  v-model="premio"
                  value="R$ 10000,00"
                ></textarea>
              </control-wrapper>
              <control-wrapper label="Data expiração:">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Insira aqui as regras necessários para o desafio"
                  v-model="data_expiracao"
                  value="28/11/2019"
                >
              </control-wrapper>
            </fieldset>
            <div class="text-right">
              <a @click="save" class="btn btn-success">
                Salvar
                <i class="icon-arrow-right14 position-right"></i>
              </a>
            </div>
          </form>
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