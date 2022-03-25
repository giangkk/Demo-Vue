<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore()
    const title = ref("")
    const addToto = (todo) => store.dispatch('addTodo',todo)
    const onSubmit = async(e) => {
      e.preventDefault()
      await addToto(title.value)
      title.value = ''
    }
    return {
      title,
      onSubmit
    };
  },
  
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>