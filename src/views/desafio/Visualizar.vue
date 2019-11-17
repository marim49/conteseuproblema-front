<template>
  <div>
    <page-header>
      <span class="text-semibold">Desafio</span> - Visualizar
    </page-header>
    <div class="content">
      <div class="panel panel-flat">
        <div class="panel-body">
          <div class="row">
                
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Empresa:</label>
                    <input
                      type="text"
                      value="E-commerce Brasil"
                      name="experience-company"
                      placeholder="Company name"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <label>Nome do desafio:</label>
                    <input
                      type="text"
                      value="Desafio e-commerce"
                      name="experience-company"
                      placeholder="Company name"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <label>Recompensa pelo desafio:</label>
                    <input
                      type="text"
                      value="R$ 10000,00"
                      name="experience-company"
                      placeholder="Company name"
                      class="form-control"
                      disabled
                    />
                  </div>
                  
                  <div class="form-group">
                    <label>Setor:</label>
                    <select name="position" class="select" disabled>
                      <option></option>
                      <optgroup label="Developer Relations">
                        <option value="1" selected>Desenvolvimento</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Regras:</label>
                    <textarea
                      name="experience-position"
                      placeholder="Company name"
                      class="form-control"
                      rows="4"
                      cols="3"
                      readonly>Desenvolver uma solução para realizar uma compra de vários itens no carrinho através de diversos meios de pagamento. Link para o código fonte do projeto: https://github.com/marim49/green-box
                    </textarea>
                    
                  </div>
                  <div class="form-group">
                    <label>Requisitos:</label>
                    <textarea readonly
                      name="experience-description"
                      rows="2"
                      cols="3"
                      class="form-control"
                    >Profissional ter graduação na área de TI
                    </textarea>
                  </div>
                  <div class="form-group">
                    <label>Data de expiração:</label>
                    <input
                      type="text"
                      value="28/12/2019"
                      name="experience-company"
                      placeholder="Company name"
                      class="form-control"
                      disabled
                    />
                  </div>
                </div>
              </div>
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
      nome_desafio: null,
      setor: null,
      regras: null,
      requisitos: null,
      premio: null,
      data_expiracao: null
    };
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
      };
      console.log(saveData);
      try {
        let { data } = await axios.post("/api/desafio/create", saveData);
        if (data.success) {
          this.$router.push("/desafios");
        } else {
          console.log("error");
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