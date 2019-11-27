<template>
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-header">
        <a class="navbar-brand"
            href="index.html">
            <img class="silas-logo"
                src="/assets/images/logo_branca.png"
                alt="">
        </a>

        <ul class="nav navbar-nav visible-xs-block">
            <li>
                <a data-toggle="collapse"
                    data-target="#navbar-mobile">
                    <i class="icon-tree5"></i>
                </a>
            </li>
            <li>
                <a class="sidebar-mobile-main-toggle">
                    <i class="icon-paragraph-justify3"></i>
                </a>
            </li>
        </ul>
    </div>

    <div class="navbar-collapse collapse"
        id="navbar-mobile">
        <ul class="nav navbar-nav navbar-right">

            <li class="dropdown dropdown-user">
                <a class="dropdown-toggle"
                    data-toggle="dropdown">
                    <img v-bind:src="'/assets/images/'+imagem" 
                        alt="">
                    <span>{{nome}}</span>
                    <i class="caret"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                        <a>
                        <router-link to='/perfil/visualizar' tag='li'>
                            <i class="icon-user-plus"></i> Minha conta
                        </router-link>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <i class="icon-cog5"></i> Config da conta
                        </a>
                    </li>
                    <li>
                        <a @click="deslogar">
                            <i class="icon-switch2"></i> Sair
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>
.silas-logo {
    margin-top: 0;
    height: 24px;
    display: inline-block;
}

.silas-description {
    font-family: Oswald, sans-serif;
    font-size: 20px;
    margin-left: 20px;
    vertical-align: bottom;
    margin-bottom: 2px;
    display: inline-block;
}
</style>
<script>
    import axios from 'axios' 
export default {
  data() {
    return { nome: null, imagem:null }
  },
  async created () {
      try {
          const {data} = await axios.get('api/conteseuproblema/getUser')
          console.log(data.data)
          if (!data.error) {
              this.nome = data.data[0].nome
              this.imagem = data.data[0].img

          }
      } catch (error) {
          console.log(error)
      }
  },
  methods:{
       deslogar() { 
           console.log('entrou aqui')
            localStorage.removeItem('token')
            setTimeout(()=>{
                location.reload()
            },500)
      }
  }  
}
</script>
