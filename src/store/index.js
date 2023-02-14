import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [
      {id: '1', text:'Recolectar gemas del infinito', completed: false},
      {id: '2', text:'Recolectar gema 1', completed: false},
      {id: '3', text:'Recolectar gemas 2', completed: false},
      {id: '4', text:'Recolectar gemas 3', completed: true},
      {id: '5', text:'Recolectar gemas 4', completed: false},
      {id: '6', text:'Recolectar gemas 5', completed: true},
    ]
  },
  mutations: {
    toggleTodo( state, id ) {
      const todoIdx = state.todos.findIndex( todo => todo.id === id )
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo( state, text = '') { 
      if(text.length <= 1 ) return

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })

    }
  },
  getters: {
    allTodos(state, getters, rootState) {
      return state.todos
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter( todo => todo.completed)
    },    
    pendingTodos(state, getters, rootState) {
      return state.todos.filter( todo => !todo.completed)
    },
    getTodosByTab: ( _ , getters) => ( tab ) => {
      switch ( tab ) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    } 
  },
  actions: {
  },
  modules: {
  }
})
