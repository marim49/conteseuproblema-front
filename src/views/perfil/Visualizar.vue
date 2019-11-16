<template>
  <div>
    <page-header>
      <span class="text-semibold">Perfil</span> - Meu Perfil
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
              <span class="text-uppercase text-size-mini text-muted">Pontuação por soluções</span>
            </div>
          </div>
	  </div>
      <div class="panel panel-flat">
        <div class="panel-heading">
          <h6 class="panel-title">Informações do perfil</h6>
          
        </div>
        <div class="panel-body">
          <form action="#">
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Nome</label>
                  <input type="text" value="Leandro" class="form-control" />
                </div>
                <div class="col-md-6">
                  <label>Sobrenome</label>
                  <input type="text" value="Marim Mauricio" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-4">
                  <label>Cidade</label>
                  <input type="text" value="Belo Horizonte" class="form-control" />
                </div>
                <div class="col-md-4">
                  <label>Estado</label>
                  <input type="text" value="Minas Gerais" class="form-control" />
                </div>
                <div class="col-md-4">
                  <label>País</label>
                  <input type="text" value="Brazil" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Email</label>
                  <input
                    type="text"
                    readonly="readonly"
                    value="leandro.marim@hotmail.com"
                    class="form-control"
                  />
                </div>
                <div class="col-md-6">
                  <label>Telefone</label>
                  <input type="text" value="(99) 99999-9999" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Celular</label>
                  <input type="text" value="(99) 99999-9999" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label class="display-block">Atualizar foto de perfil</label>
                  <input type="file" class="file-styled" />
                </div>
              </div>
            </div>

            <div class="text-right">
              <button type="submit" class="btn btn-primary">
                Atualizar
                <i class="icon-arrow-right14 position-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- /profile info -->
      <!-- Account settings -->
      <div class="panel panel-flat">
        <div class="panel-heading">
          <h6 class="panel-title">Configurações da conta</h6>
        </div>

        <div class="panel-body">
          <form action="#">
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>CPF</label>
                  <input type="text" value="143.652.096-71" readonly="readonly" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label>Senha atual</label>
                  <input type="password" value="password" readonly="readonly" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Nova senha</label>
                  <input type="password" placeholder="Insira a nova senha" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label>Confirme a nova senha</label>
                  <input type="password" placeholder="Repita a nova senha" class="form-control" />
                </div>
              </div>
            </div>

            <div class="text-right">
              <button type="submit" class="btn btn-primary">
                Atualizar
                <i class="icon-arrow-right14 position-right"></i>
              </button>
            </div>
          </form>
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