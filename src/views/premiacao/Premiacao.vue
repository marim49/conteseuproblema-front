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
              <h3 class="no-margin text-semibold">660</h3>
              <span class="text-uppercase text-size-mini text-muted">Pontuação por suas soluções</span>
            </div>
          </div>
	  </div>
    <div class="timeline timeline-center">
      <div class="timeline-container">
      <!-- 1 -->
      <div class="timeline-row post-even">
        <div class="timeline-icon">
                    <img src="../../../public/assets/images/leandro_modelo.jpeg" alt="">
        </div>
        <div class="timeline-time">
                    <a href="#">Leandro Marim</a> Ganhou um desafio
                    <span class="text-muted">2 horas atrás</span>
        </div>
        <div class="timeline-content">
                    <div class="panel border-left-lg border-left-primary">
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-md-8">
                            <h6 class="no-margin-top"><a href="#">Desafio e-commerce</a></h6>
                          </div>

                          <div class="col-md-4">
                            <ul class="list task-details">
                              <li>28 de novembro, 2019</li>
                              <li class="dropdown">
                                        Status: &nbsp; 
                                <a href="#" class="label label-primary" data-toggle="dropdown">Resolvido</a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="panel-footer panel-footer-condensed">
                        <div class="heading-elements">
                          <span class="heading-text">Pontuação: <span class="text-semibold bg-success"> + 200 pts</span></span>
                        </div>
                      </div>
                    </div>
        </div>
        
      </div>
      <!-- 2 -->
      <div class="timeline-row">
        <div class="timeline-icon">
                    <img src="assets/images/placeholder.jpg" alt="">
        </div>
        <div class="timeline-time">
                    <a href="#">Maiara Maraisa</a> Ganhou um desafio
                    <span class="text-muted">3 dias atrás</span>
        </div>
        <div class="timeline-content">
                    <div class="panel border-left-lg border-left-primary">
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-md-8">
                            <h6 class="no-margin-top"><a href="#">Desafio e-commerce</a></h6>
                          </div>

                          <div class="col-md-4">
                            <ul class="list task-details">
                              <li>28 de novembro, 2019</li>
                              <li class="dropdown">
                                        Status: &nbsp; 
                                <a href="#" class="label label-primary" data-toggle="dropdown">Resolvido</a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="panel-footer panel-footer-condensed">
                        <div class="heading-elements">
                          <span class="heading-text">Pontuação: <span class="text-semibold bg-success"> + 200 pts</span></span>
                        </div>
                      </div>
                    </div>
        </div>   
      </div>
      <!-- 3 -->
      <div class="timeline-row post-even">
        <div class="timeline-icon">
                    <img src="assets/images/placeholder.jpg" alt="">
        </div>
        <div class="timeline-time">
                    <a href="#">Israel Severino</a> Ganhou um desafio
                    <span class="text-muted">7 dias atrás</span>
        </div>
        <div class="timeline-content">
                    <div class="panel border-left-lg border-left-primary">
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-md-8">
                            <h6 class="no-margin-top"><a href="#">Desafio e-commerce</a></h6>
                          </div>

                          <div class="col-md-4">
                            <ul class="list task-details">
                              <li>28 de novembro, 2019</li>
                              <li class="dropdown">
                                        Status: &nbsp; 
                                <a href="#" class="label label-primary" data-toggle="dropdown">Resolvido</a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="panel-footer panel-footer-condensed">
                        <div class="heading-elements">
                          <span class="heading-text">Pontuação: <span class="text-semibold bg-success"> + 200 pts</span></span>
                        </div>
                      </div>
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