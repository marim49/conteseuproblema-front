<template>
  <div>
    <page-header>
      <span class="text-semibold">Premiações</span>
    </page-header>
    <div class="content">
      <!-- Profile info -->
	  <div class="panel panel-flat">
		<div class="panel-body text-center">
            <div class="media-body text-center">
              <div class="media-middle">
                <i class="icon-trophy3 icon-3x text-success-400"></i>
              </div>
              <h3 class="no-margin text-semibold">652,549</h3>
              <span class="text-uppercase text-size-mini text-muted">Pontuação por soluções</span>
            </div>
          </div>
	  </div>
      <!-- /account settings -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PNotify from "pnotify/dist/es/PNotify";

export default {
  data() {
    return {
      descricao: null,
      codigo: null
    };
  },
  methods: {
    async save() {
      let saveData = {
        descricao: this.descricao,
        codigo: this.codigo
      };
      console.log(saveData);
      // console.log(saveData)
      try {
        let { data } = await axios.post("/api/disciplina/create", saveData);
        // console.log(data)
        if (data.success) {
          PNotify.success("Registro salvo com sucesso");
          this.$router.push("/cadastro/empreendimento");
        } else {
          PNotify.error(data.message);
          this.hideLoading();
        }
      } catch (err) {
        console.log(err);
        PNotify.error("Erro ao salvar os dados");
        this.hideLoading();
      }
    }
  }
};
</script>