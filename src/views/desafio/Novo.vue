<template>
  <div>
    <page-header>
      <span class="text-semibold">Cadastro</span> - Novo desafio
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
                <option value="desenvolvimento">Desenvolvimento</option>
                </select>
              </control-wrapper>
              <control-wrapper label="Regras:">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Insira aqui as regras necessários para o desafio"
                  v-model="regras"
                >
              </control-wrapper>
              <control-wrapper label="Requisitos:">
                <textarea
                  type="textarea"
                  class="form-control"
                  placeholder="Insira aqui os requisitos necessários para o desafio"
                  v-model="requisitos"
                ></textarea>
              </control-wrapper>
              <control-wrapper label="Prêmio:">
                <textarea
                  type="textarea"
                  class="form-control"
                  placeholder="Insira aqui o prêmio para o desafio"
                  v-model="premio"
                ></textarea>
              </control-wrapper>
              <control-wrapper label="Data expiração:">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Insira aqui as regras necessários para o desafio"
                  v-model="data_expiracao"
                >
              </control-wrapper>
            </fieldset>
            <div class="text-right">
              <a @click="save" class="btn btn-primary">
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
                descricao: this.descricao,
                codigo: this.codigo
                
            }
            console.log(saveData)
            // console.log(saveData)
            try {
                let { data } = await axios.post('/api/disciplina/create', saveData)
                // console.log(data)
                if (data.success) {
                    PNotify.success('Registro salvo com sucesso')
                    this.$router.push('/cadastro/empreendimento')
                } else {
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