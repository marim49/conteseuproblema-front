<template>
    
        <div class="content">

            <!-- Advanced login -->
            <form action="logar"
                method="post">
                <div class="login-form">
                    <div class="text-center">
                        <div class="icon-object border-warning-400 text-warning-400">
                            <i class="icon-users"></i>
                        </div>
                        <h5 class="content-group-lg">Logar
                        </h5>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            name="cpf"
                            v-model="cpf"
                            class="form-control input-lg"
                            placeholder="Digite seu usuario">
                        <div class="form-control-feedback">
                            <i class="icon-user text-mutecontffdsgfsfsdfsdd"></i>
                        </div>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="password"
                            name="password"
                            v-model="password"
                            class="form-control input-lg"
                            placeholder="Digite sua senha">
                        <div class="form-control-feedback">
                            <i class="icon-lock2 text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group login-options">
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="checkbox-inline">
                                    <input type="checkbox"
                                        class="styled"
                                        checked="checked"> Manter conectado
                                </label>
                            </div>

                            <div class="col-sm-6 text-right">
                                <router-link to="/recuperar">Esqueceu a sua senha?</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <a type="submit"
                            class="btn bg-blue btn-block btn-lg"
                            @click="logar">Logar
                            <i class="icon-arrow-right14 position-right"></i>
                        </a>
                    </div>
                </div>
            </form>
            <!-- /advanced login -->
        </div>
        <!-- /main content -->
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'


export default {

    data() {
        return {
            cpf: null,
            password: null,
            cadastrar: null,
        }


    },
    mounted() {
        let token = localStorage.token
        console.log(token)
        if (token) {
            this.login(token)
        }
    },
    methods: {
        ...mapActions(['login', 'cadastrar_usuario']),
        async logar() {
            let { data } = await axios.post('/api/conteseuproblema/login', { user: this.cpf, password: this.password })
            localStorage.setItem('token', data.data)
            this.login(data.data)
        },
        cadastrar_user() {
            console.log('chamou')
            this.cadastrar_usuario()
        }
    }
}
</script>

