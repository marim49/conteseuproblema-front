<template>
<!-- Main sidebar -->
<div class="sidebar sidebar-main sidebar-fixed">
    <div class="sidebar-content">
        <!-- User menu -->
        <div class="sidebar-user">
            <div class="category-content">
                <div class="media">
                    <a href="#"
                        class="media-left">
                        <img src="/assets/images/leandro_modelo.jpeg"
                            class="img-circle img-sm"
                            alt="">
                    </a>
                    <div class="media-body">
                        <span class="media-heading text-semibold">Leandro Marim</span>
                        <div class="text-size-mini text-muted">
                            <i class="icon-pin text-size-small"></i> &nbsp;Belo Horizonte, MG
                        </div>
                    </div>
                    <div class="media-right media-middle">
                        <ul class="icons-list">
                            <li>
                                <a href="#">
                                    <i class="icon-cog3"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- /user menu -->
        <!-- Main navigation -->
        <div class="sidebar-category sidebar-category-visible">
            <div class="category-content no-padding">
                <ul class="navigation navigation-main navigation-accordion">
                    <!-- Main -->
                    <li class="navigation-header">
                        <i class="icon-menu"
                            title="Main pages"></i>
                    </li>

                    <router-link to="/"
                        tag="li">
                        <a>
                            <i class="icon-home4"></i>
                            <span>Início</span>
                        </a>
                    </router-link>
                    <router-link to="/gerencial/dashboard"
                        tag="li">
                        <a>
                            <i class="icon-graph"></i>
                            <span>Dashboard</span>
                        </a>
                    </router-link>
                    <!-- <router-link to="/desafios/inscrever"
                        tag="li">
                        <a>
                            <i class="icon-users4"></i>
                            <span>inscrever em desafio - S</span>
                        </a>
                    </router-link> -->
                    <router-link to="/desafios/listar"
                        tag="li">
                        <a>
                            <i class="icon-puzzle"></i>
                            <span>Desafios</span>
                        </a>
                    </router-link>
                    <router-link to="/empresa/premiacoes"
                        tag="li">
                        <a>
                            <i class="icon-trophy3"></i>
                            <span>Premiações</span>
                        </a>
                    </router-link>
                    <router-link to="/empresa/rank"
                        tag="li">
                        <a>
                            <i class="icon-podium"></i>
                            <span>Ranking</span>
                        </a>
                    </router-link>
                    <router-link to="/perfil/visualizar"
                        tag="li">
                        <a>
                            <i class="icon-brain"></i>
                            <span>Perfil</span>
                        </a>
                    </router-link>
                    
                <!--
                    <li>
                        <a href="#">
                            <i class="icon-hammer2"></i>
                            <span>Alvará de Funcionamento</span>
                        </a>
                        <ul>
                            <router-link to="/alvara"
                                tag="li"> 
                                <a href="#">
                                    <i class="icon-plus3 "></i>
                                    Novo
                                </a>
                            </router-link>
                            <li>
                                <a href="#">
                                    <i class="icon-reading"></i>
                                    Pesquisar 
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon-bookmark"></i>
                            <span>Cadastros</span>
                        </a>
                        <ul>
                            <router-link to="/cadastro/empreendedor"
                                tag="li"> 
                                <a>
                                    <i class="icon-users4"></i>    
                                    Empreendedores
                                </a>
                            </router-link>
                            <router-link to="/cadastro/empreendimento"
                                tag="li">
                                <a>
                                    <i class="icon-city"></i>  
                                    Empreendimentos
                                </a>
                            </router-link>
                        </ul>
                    </li>
                -->
                    <!-- /page kits -->
                </ul>
            </div>
        </div>
        <!-- /main navigation -->
    </div>
</div>
<!-- /main sidebar -->
</template>
<script>
export default {


}
</script>
