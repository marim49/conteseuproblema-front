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
                  class="form-control"
                  v-model="nome"
                  placeholder="Insira o nome do desafio"
                />
              </control-wrapper>
              <control-wrapper label="Setor:">
                <select class="form-control">
                  <option value="Desenvolvimento" selected>Desenvolvimento</option>
                </select>
              </control-wrapper>
              <control-wrapper label="Descrição do desafio:">
                <textarea
                  type="textarea"
                  class="form-control"
                  placeholder="Insira aqui toda a informação referente ao desafio para que possa ser solucionado"
                  v-model="requisitos"
                ></textarea>
              </control-wrapper>
              <control-wrapper label="Tipo de prêmio:">
                <select class="form-control">
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
                ></textarea>
              </control-wrapper>
              <control-wrapper label="Data expiração:">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Insira aqui as regras necessários para o desafio"
                  v-model="dtExpiracao"
                />
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
import axios from "axios";
import PNotify from "pnotify/dist/es/PNotify";
import moment from "moment";

export default {
  data() {
    return {
      nome:null,
      regras:null,
      setor:null,
      requisitos:null,
      dtExpiracao: null,
      premio:null
    }
  },
  async created() {
    try {
      this.showLoading()
      const  {data} = await axios.get("api/conteseuproblema/retornaProblema/" + this.$route.params.id)
      this.nome = (data.data[0].desc) ? data.data[0].desc : '',
      this.regras= data.data[0].regras,
      this.setor= data.data[0].setor,
      this.requisitos= data.data[0].requisitos,
      this.dtExpiracao = moment(data.data[0].prazo).format("YYYY-MM-DD"),
      this.premio = data.data[0].premiacao
    } catch (error) {
      console.log(error)
    } finally {
      this.hideLoading()
    }
  },
  methods: {
    async save() {
      let saveData = {
        nomeDesafio: this.nome,
        setor: this.setor,
        regras: this.regras,
        requisitos: this.requisitos,
        premio: this.premio,
        dataExpiracao: moment(this.dtExpiracao).format('YYYY-MM-DD')
      };
      try {
        let { data } = await axios.post("api/conteseuproblema/editarProblema/"+this.$route.params.id, saveData)
        if (!data.error) {
          this.$swal.fire({text: data.msg, type:'success', timer:1300})
          setTimeout(() => {
            this.$router.push("/desafios/listar")
          },1500)
        } else {
          console.log("error");
          this.$swal.fire({text: data.msg, type:'error'})
          this.hideLoading();
        }
      } catch (err) {
        console.log(err);
        this.$swal.fire({text:"Erro ao salvar os dados", type:'error'})
        this.hideLoading();
      }
    }
  }
};
</script>