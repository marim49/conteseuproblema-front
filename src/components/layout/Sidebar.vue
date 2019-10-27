<template>
<!-- Main sidebar -->
<div class="sidebar sidebar-main sidebar-fixed">
    <div class="sidebar-content">
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
                    <!-- <router-link to="/desafios/inscrever"
                        tag="li">
                        <a>
                            <i class="icon-users4"></i>
                            <span>inscrever em desafio - S</span>
                        </a>
                    </router-link> -->
                    <router-link to="/desafios/empresa"
                        tag="li">
                        <a>
                            <i class="icon-puzzle"></i>
                            <span>Desafios</span>
                        </a>
                    </router-link>
                    <!-- <router-link to="/desafios/solucionador"
                        tag="li">
                        <a>
                            <i class=" icon-puzzle"></i>
                            <span>Visualizar desafios - S</span>
                        </a>
                    </router-link> -->
                    
                    <!-- <router-link to="/empresa/rank"
                        tag="li">
                        <a>
                            <i class="icon-medal"></i>
                            <span>Visualizar ranking - S</span>
                        </a>
                    </router-link> -->
                    <router-link to="/perfil/solucionador"
                        tag="li">
                        <a>
                            <i class="icon-trophy3"></i>
                            <span>Premiações</span>
                        </a>
                    </router-link>
                    <router-link to="/solucionador/rank"
                        tag="li">
                        <a>
                            <i class="icon-podium"></i>
                            <span>Ranking</span>
                        </a>
                    </router-link>
                    <router-link to="/perfil/solucionador"
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
