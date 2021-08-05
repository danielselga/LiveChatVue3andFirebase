<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import getUser from '../composables/getUser'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    Navbar,
    NewChatForm,
    ChatWindow
  },
  setup(){
    const { user } = getUser()
    const router = useRouter()

  watch(user, () => { //Aqui estamos observando o watch e quando ele possui uma alteração disparamos uma função que nos redireciona para o login. #daora
  if(!user.value){
    router.push({name: 'Welcome'})
  }
  })

  return {user, router}

  }
}
</script>

<style>

  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }

  nav p.email {
    font-size: 14px;
    color: #999;
  }

  


</style>