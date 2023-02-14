<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">Error en la carga ...</h5>

  <div v-if="users.length > 0">
    <user-list 
        :users="users"
        v-slot="{ user }"
    >
        <h5>{{ user.first_name }} {{ user.last_name }}</h5>
        <span>{{ user.email }}</span>
        <hr>
    </user-list>
  </div>

  <button @click="prevPage">Atrás</button>
  <button @click="nextPage">Siguiente</button>

  <span>Página: {{ currentPage }}</span>
</template>

<script>
import UserList from '@/components/UserList'
import useUsers from '@/composables/useUsers'

export default {
  components: { UserList },
    setup() {
        const { users, isLoading, currentPage, errorMessage, nextPage, prevPage } = useUsers()

        return {
            users,
            isLoading,
            currentPage,
            errorMessage,
            nextPage,
            prevPage
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    width:100%;
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
}
ul{
    width: 250px;
}
</style>