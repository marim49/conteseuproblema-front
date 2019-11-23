<template>
  <div>
    <page-header>
      <span class="text-semibold">Perfil</span> - Meu Perfil
    </page-header>
    <div class="content">
      <!-- Profile info -->
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
                  <input type="text"  v-model="usuario[0].nome" class="form-control" />
                </div>
                <div class="col-md-6">
                  <label>Sobrenome</label>
                  <input type="text"  v-model="usuario[0].sobrenome" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-4">
                  <label>Cidade</label>
                  <input type="text"  v-model="usuario[0].cidade" class="form-control" />
                </div>
                <div class="col-md-4">
                  <label>Estado</label>
                  <input type="text"  class="form-control" v-model="usuario[0].estado"/>
                </div>
                <div class="col-md-4">
                  <label>País</label>
                  <input type="text" v-model="usuario[0].pais" class="form-control" />
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
                    class="form-control"
                    v-model="usuario[0].email"
                  />
                </div>
                <div class="col-md-6">
                  <label>Telefone</label>
                  <input type="text" v-model="usuario[0].telefone" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Celular</label>
                  <input type="text" v-model="usuario[0].telefone" class="form-control" />
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
                  <input type="text" v-model="usuario[0].cpf" readonly="readonly" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label>Senha atual</label>
                  <input type="password" value="password" v-model="usuario[0].usuario.password" readonly="readonly" class="form-control" />
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
    return { usuario: [] }
  },
  async created(){
    try {
      const {data} = await axios.get('api/conteseuproblema/getUser')
      this.usuario = data.data
    } catch (error) {
      PNotify.error('Erro ao buscar usuario')
    }

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
        let { data } = await axios.post("");
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