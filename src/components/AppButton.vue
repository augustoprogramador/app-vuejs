<template>
    <button @click="sendData">
        {{ variant }}
    </button>
</template>
<script>
    export default {
        props: {
            variant: {
                type: String,
                default: 'success'
            }
        },
        /**
         * setup() recebe 2 parâmetros: As Propriedades e o Contexto
         * O contexto tem acesso ao atributos do componente, por exemplo, se na tag de chamada
         * acrescentarmos um data-vue="alguma coisa", esse atributo e seu valor estarão disponíveis no
         * setup do componente através do contexto, assim como muitas outras coisas
         */
        setup(props, {emit}) { // Passando as porps por parâmetro, já que não temos acesso ao this dentro do setup

            const sendData = () => {
                emit('update', true);
            }
            return {
                sendData,
            }
        }
    }
</script>