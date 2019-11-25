<template>
  <div>
    <page-header>
      <span class="text-semibold">Desafio</span> - Inscrever
    </page-header>
    <div class="content">
      <div class="panel panel-flat">
        <div class="panel-body">
          <form class="steps-basic" action="#">
            <h6>Informações do desafio</h6>
            <fieldset>
              <div class="row">
                
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Nome do desafio:</label>
                    <input
                      type="text"
                      v-bind:value="nome"
                      name="experience-company"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <label>Recompensa pelo desafio:</label>
                    <input
                      type="text"
                      v-bind:value="premio"
                      name="experience-company"
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
                        <option value="2">Ads Solutions Consultant</option>
                        <option value="3">Technical Solutions Consultant</option>
                        <option value="4">Business Intern</option>
                      </optgroup>

                      <optgroup label="Engineering &amp; Design">
                        <option value="5">Interaction Designer</option>
                        <option value="6">Technical Program Manager</option>
                        <option value="7">Software Engineer</option>
                        <option value="8">Information Security Engineer</option>
                      </optgroup>

                      <optgroup label="Marketing &amp; Communications">
                        <option value="13">Media Outreach Manager</option>
                        <option value="14">Research Manager</option>
                        <option value="15">Marketing Intern</option>
                        <option value="16">Business Intern</option>
                      </optgroup>

                      <optgroup label="Sales Operations">
                        <option value="17">Sales Operations Analyst</option>
                        <option value="18">Technology Product Manager</option>
                        <option value="19">Product Expert</option>
                        <option value="20">Sales Insights Analyst</option>
                        <option value="21">Customer Operations Analyst</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <!--<div class="form-group">
                    <label>Regras:</label>
                    <textarea
                      name="experience-position"
                      placeholder="Company name"
                      class="form-control"
                      rows="4"
                      cols="3"
                      readonly>Desenvolver uma solução para realizar uma compra de vários itens no carrinho através de diversos meios de pagamento. Link para o código fonte do projeto: https://github.com/marim49/green-box
                    </textarea>
                    
                  </div>-->
                  <div class="form-group">
                    <label>Descrição:</label>
                    <textarea readonly
                      name="experience-description"
                      rows="2"
                      cols="3"
                      class="form-control"
                      v-bind:value="requisitos"
                    >
                    </textarea>
                  </div>
                  <div class="form-group">
                    <label>Data de expiração:</label>
                    <input
                      type="text"
                      v-bind:value="dataExpiracao"
                      name="experience-company"
                      class="form-control"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <h6>Enviar solução</h6>
            <fieldset>
              <div class="row">
                  <div class="form-group">
                    <label>Descrição sobre a solução realizada:</label>
                    <textarea
                      name="experience-description"
                      rows="4"
                      cols="4"
                      placeholder="Insira aqui um preve resumo sobre a solução criada, e se você precisou de mais integrantes, nos informe"
                      class="form-control"
                    ></textarea>
                  </div>
              </div>
            </fieldset>

            <h6>Resultado avaliação</h6>
            <fieldset>
              <div class="panel panel-default">
							<div class="panel-heading">
								<h6 class="panel-title">Resultado</h6>
								<div class="heading-elements">
									<span class="heading-text"><i class="icon-spinner2 spinner"></i></span>
									<div class="progress progress-xxs">
										<div class="progress-bar progress-bar-warning" style="width: 60%;">
											<span class="sr-only">60% Complete</span>
										</div>
									</div>
			                	</div>
							</div>
							
							<div class="panel-body">
                O gestor irá avaliar a sua solução, em breve. Agradecemos sua colaboração
							</div>
						</div>
            </fieldset>
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
      nome: null,
      setor: null,
      requisitos: null,
      premio: null,
      dataExpiracao: null
    };
  },
  async created() {
    try {
      const {data} = await axios.get('/api/conteseuproblema/retornaProblema/'+this.$route.params.id)
      if (!data.error) {
          this.nome = (data.data[0].desc) ? data.data[0].desc : '',
          this.setor= data.data[0].setor,
          this.requisitos= data.data[0].requisitos,
          this.dataExpiracao = moment(data.data[0].prazo).format("YYYY-MM-DD"),
          this.premio = data.data[0].premiacao
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async save() {
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