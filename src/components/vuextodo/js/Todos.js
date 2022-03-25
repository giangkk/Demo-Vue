import { computed } from 'vue'
import {useStore} from 'vuex'

function useTodos() {
  const store = useStore()
  const fetchTodos = () => store.dispatch('fetchTodos')
  const updateTodo = (update) => store.dispatch('updateTodo',update)
  const deleteTodo = (id) => store.dispatch('deleteTodo', id)
  const onDblClick = (todo) => {
    const updTodo = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed
    };
    updateTodo(updTodo);
  }
  const allTodos = computed(() => store.getters.allTodos)
  fetchTodos()
  return {
    allTodos,
    deleteTodo, onDblClick
  }
}
export default useTodos