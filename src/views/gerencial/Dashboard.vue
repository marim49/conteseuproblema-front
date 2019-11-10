
<template>
    <div>
        <page-header>
      <span class="text-semibold">Dashboard</span>
    </page-header>
    <div class="content">
      <div class="panel panel-flat">
        <div class="panel-heading text-center"> <h3> Usuarios </h3> </div>
        <div class="panel-body">
            <div class="row">
                <UsuariosAtivos/>
                <historico-usuarios/>
            </div>
            
        </div>
      </div>
    </div>
    <div class="content">
        <div class="col-lg-5">
          <div class="panel panel-flat">
            <div class="panel-heading text-center"> <h3> Desafios </h3> </div>
                <div class="panel-body">
                    <desafios/> 
                </div>
            </div>
        </div>
        <div class="col-lg-7">
          <div class="panel panel-flat">
            <div class="panel-heading text-center"> <h3> Maiores solucionadores do mes de novembro </h3> </div>
            <div class="panel-body">
                <maiores-pontuadores/>
            </div>
          </div>
        </div>
    </div>
    
    <div class="content">
        <div class="panel panel-flat">
        <div class="panel-body">
            <div class="row">
                <gasto-premio-mes/>
            </div>
            
        </div>
      </div>
    </div>

    
    
    
        

        
    </div>
    
</template>


<script>

import UsuariosAtivos from "../../components/graphics/UsuariosAtivos.vue"
import HistoricoUsuarios from "../../components/graphics/HistoricoUsuarios.vue"
import Desafios from "../../components/graphics/Desafios.vue"
import MaioresPontuadores from "../../components/graphics/MaioresPontuadores.vue"
import GastoPremioMes from "../../components/graphics/GastoPremioMes.vue"

export default {
     components: {
        UsuariosAtivos,
        HistoricoUsuarios,
        Desafios,
        MaioresPontuadores,
        GastoPremioMes

     },

    data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    };
  }

}


</script>