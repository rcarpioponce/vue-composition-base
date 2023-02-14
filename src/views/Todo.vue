<template>
  <h1>Todo de Thanos</h1>
  <h4>Pendientes: {{ pending.length }}</h4>
  <hr>
  <button 
    :class="{'active': currentTab == 'all'}"
    @click="currentTab = 'all'"
  >
    Todos
  </button>
  <button 
    :class="{'active': currentTab == 'pending'}"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>
  <button 
    :class="{'active': currentTab == 'completed'}"
    @click="currentTab = 'completed'"
  >
    Completados
  </button>

  <div>
    <ul>
        <li v-for="todo in getTodosByTab" 
          :key="todo.id"
          :class="{'completed': todo.completed}"
          @dblclick="toggleTodo(todo.id)"
        >
            {{ todo.text }}
        </li>
    </ul>
  </div>

  <button @click="openModal">Crear Todo</button>

  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h1>Nuevo Tarea</h1>
      <hr>
    </template>
    <template v-slot:body>
      <form @submit.prevent="createTodo(textTodo); closeModal()">
        <input type="text" v-model="textTodo">
        <br>
        <br>
        <button type="submit">Guardar</button>
      </form>
    </template>
  </modal>

</template>


<script>
import { ref } from 'vue'
import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal'
export default {
  components: { Modal },
    setup(){
      const isOpen = ref(false)
        const { textTodo, currentTab, all, completed, pending, getTodosByTab, toggleTodo, createTodo } = useTodos() 
        
        return {
          textTodo, 
          currentTab, 
          all, 
          completed, 
          pending, 
          getTodosByTab,
          //methods 
          toggleTodo,
          createTodo,
          isOpen,
          openModal: () => isOpen.value = true,
          closeModal: () => isOpen.value = false,
        }
        
        // const store = useStore()
        
        // const currentTab = ref('all')

        // return {
        //     currentTab,
        //     all: computed(() => store.getters['allTodos']),
        //     completed: computed(() => store.getters['completedTodos']),
        //     pending: computed(() => store.getters['pendingTodos']),
        //     getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
        //     //Methods
        //     toggleTodo: ( id ) => store.commit('toggleTodo', id ), 
        // }
    }
}
</script>

<style scoped>
div {
    display:flex;
    justify-content: center;
    text-align: center;
}
ul{
    width: 300px;
    text-align:left;
}
li{
    cursor:pointer;
    line-height: 150%;
}
.active{
    background-color: #2c3e50;
    color: white;
}
.completed{
    text-decoration: line-through;
}

</style>