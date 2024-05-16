<template>
    <div>
        Formulário de Usuários
    </div>

    <button @click="login">Login</button>
</template>

<script>
    export default {
        created() {
            console.log(this.$route) // informações sobre a rota
            console.log(this.$router) // funcionalidades para a rota
        },
        methods: {
            login() {
                console.log('loguei')
                this.$router.push('/about');
            }
        }
    }
</script>