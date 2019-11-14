<template>
  <div>
    <page-header>
      <span class="text-semibold">Inscrever</span> - Novo desafio
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
                  <div class="form-group">
                    <label>Regras:</label>
                    <textarea
                      name="experience-position"
                      placeholder="Company name"
                      class="form-control"
                      rows="4"
                      cols="3"
                      readonly>Desenvolver uma solução para realizar uma compra de vários itens no carrinho através de diversos meios de pagamento.
Link para o código fonte do projeto: https://github.com/marim49/green-box
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

                  <div class="form-group">
                    <label class="display-block">Envio da solução:</label>
                    <input name="recommendations" type="file" class="file-styled" />
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
								Estamos avaliando a sua solução, em breve iremos atualizar este resultado
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