<template>
  <form @submit.prevent="handleEvent">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    setup(){
        const email = ref('')
        const password = ref('')

        const handleEvent = () => {
            console.log(email.value, password.value)
        }

        return {email, password, handleEvent}

    }
}
</script>

<style>

</style>