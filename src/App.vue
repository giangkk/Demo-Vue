<template>
  <div>
    <!-- <div>
      <TodosList />
    </div>

    <div>
      <TodosListV3 title="Composition API" />
    </div> -->

    <WatchExample />
    <!-- <VModelsExample /> -->

    <!-- <div
      style="width: 600px; height: 600px; position: relative; font-size: 28px"
    >
      <TeleportExample />
    </div> -->

    <!-- <SuspenseExample /> -->


    <!-- <div class="container">
      <AddTodo />
      <Todos />
    </div> -->
  </div>
</template>

<script>
// import TodosList from "./components/TodosList";
// import TodosListV3 from "./components/TodosListV3";
import WatchExample from "./components/WatchExample";
// import VModelsExample from "./components/v-models/VModelsExample";
// import TeleportExample from "./components/teleport/TeleportExample";
// import SuspenseExample from "./components/suspense/SuspenseExample";
// import AddTodo from './components/vuextodo/AddTodo.vue'
// import Todos from './components/vuextodo/Todos.vue'
export default {
  name: "App",
  components: {
    // TodosList,
    // TodosListV3,
    WatchExample,
    // VModelsExample,
    // TeleportExample,
    // SuspenseExample,
    // AddTodo,
    // Todos
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
