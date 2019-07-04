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

              <control-wrapper label="desafio:">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Insira o nome do desafio"
                  v-model="nome_desafio"
                >
              </control-wrapper>
              <control-wrapper label="Código:">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Insira o código da disciplina"
                  v-model="codigo"
                >
              </control-wrapper>
              <control-wrapper label="requisitos:">
                <input
                  type="textarea"
                  class="form-control"
                  placeholder="Insira o código da disciplina"
                  v-model="codigo"
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
            descricao: null,
            codigo: null,
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