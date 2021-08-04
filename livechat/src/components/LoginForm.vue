<template>
  <form @submit.prevent="handleEvent">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context){ //o context vai substituir o this nesse caso, para emitirmos um evento vamos usar context.emit.
        const email = ref('')
        const password = ref('')

        const {error, login} = useLogin()

        const handleEvent = async () => {
            await login(email.value, password.value)
            if(!error.value){
              context.emit('login')
            }
        }

        return {email, password, handleEvent, error}

    }
}
</script>

<style>

</style>