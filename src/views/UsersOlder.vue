<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">Error en la carga ...</h5>

  <div v-if="users.length > 0">
    <ul>
        <li v-for="{ first_name, last_name, email, id} in users" :key="id">
            <h4>{{ first_name }} {{ last_name }}</h4>
            <h6>{{ email }}</h6>
        </li>
    </ul>
  </div>

  <button @click="prevPage">Atrás</button>
  <button @click="nextPage">Siguiente</button>

  <span>Página: {{ currentPage }}</span>
</template>

<script>
import useUsers from '@/composables/useUsers'

export default {
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

        // const users = ref([])
        // const isLoading = ref(false)
        // const currentPage = ref(1)
        // const errorMessage = ref()

        // const getUsers = async (page = 1) => {
        //     console.log(page)
        //     if(page <= 0) page = 1
        //     isLoading.value = true

        //     const { data } = await axios.get('https://reqres.in/api/users', {
        //         params: {
        //             page
        //         }
        //     })

        //     if( data.data.length > 0 ){
        //         users.value = data.data
        //         currentPage.value = page
        //         errorMessage.value = null
        //     } else if( currentPage.value > 0){
        //         errorMessage.value = 'No hay registros'
        //     }

        //     isLoading.value = false
        // }

        // getUsers()

        // return {
        //     users,
        //     isLoading,
        //     currentPage,
        //     errorMessage,
        //     nextPage: () => getUsers(currentPage.value + 1),
        //     prevPage: () => getUsers(currentPage.value - 1),
        // }

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