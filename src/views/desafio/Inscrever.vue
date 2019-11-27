<template>
  <div>
    <page-header>
      <span class="text-semibold">Enviar</span> - Desafio
    </page-header>
    <div class="content">
      <div class="panel panel-flat">
        <div class="panel-body">
          <form class="form-horizontal">
            <fieldset class="content-group">
              <legend class="text-semibold">Informações</legend>
              <div class="row">
                <div class="col-md-12">
                  <control-wrapper label="Nome:">
                    <input
                      type="text"
                      class="form-control"
                      v-model="desafio.nome"
                      disabled
                      placeholder="Insira o nome do desafio"
                    />
                  </control-wrapper>
                </div>
                <div class="col-md-12">
                  <control-wrapper label="Data expiração:">
                    <input type="date" class="form-control" disabled v-model="desafio.dataExpiracao" />
                  </control-wrapper>
                </div>
                <div class="col-md-12">
                  <control-wrapper label="Prêmio:">
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      placeholder="Insira aqui o prêmio para o desafio"
                      v-model="desafio.premio"
                    />
                  </control-wrapper>
                </div>
              
              
                <div class="col-md-12">
                  <control-wrapper label="Descrição do desafio:">
                    <textarea
                      type="textarea"
                      class="form-control"
                      v-model="desafio.regras"
                      disabled
                    ></textarea>
                  </control-wrapper>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Envie sua solução:</legend>
              <div class="row">
                <div class="col-sd-8">
                  <control-wrapper label="Solução para o desafio:">
                    <textarea class="form-control" placeholder="Insira aqui sua solução para o problema" v-model="solucao"></textarea>
                  </control-wrapper>
                </div>
              </div>
            </fieldset>
            <div class="text-right">
              <a @click="enviarSolucao" class="btn btn-success">
                Enviar
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
      desafio: {
        nome: null,
        setor: null,
        requisitos: null,
        premio: null,
        dataExpiracao: null
      },
      solucao: null
    }
  },
  async created() {
    try {
      const { data } = await axios.get("/api/conteseuproblema/retornaProblema/" + this.$route.params.id)
      console.log(data)
      if (!data.error) {
        this.desafio.nome = data.data[0].desc ? data.data[0].desc : "",
        this.desafio.setor = data.data[0].setor,
        this.desafio.requisitos = data.data[0].requisitos,
        this.desafio.dataExpiracao = moment(data.data[0].prazo).format("YYYY-MM-DD"),
        this.desafio.premio = data.data[0].premiacao
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async enviarSolucao() {
      try {
        console.log(this.$route.params.id)
        let { data } = await axios.post("/api/conteseuproblema/cadastraSolucao/"+this.$route.params.id,{descSolucao: this.solucao} );
        if (!data.error) {
          this.$swal.fire({type:'success', text: data.msg, timer:1200})
          setTimeout(()=>{
            this.$router.push("/desafios/listar")
          },1500)
        } else {
          this.$swal.fire({type:'erro', text: data.msg, timer:1200})
        }
      } catch (err) {
        this.$swal.fire({type:'erro', text: data.msg, timer:1200})
        console.log(err);
        this.hideLoading();
      }
    }
  }
};
</script>