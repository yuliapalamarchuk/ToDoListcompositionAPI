<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">My ToDo List!</div>
    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input
            v-model="newToDoContent"
            class="input"
            type="text"
            placeholder="Add to do"
          />
        </p>
        <p class="control">
          <button :disabled="!newToDoContent" class="button is-info">
            Add
          </button>
        </p>
      </div>
    </form>

    <div v-for="todo in todos" :key="todo.id" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div
            class="columns is-mobile is-vcentered"
            :class="{ 'has-background-success-light': todo.done }"
          >
            <div
              class="column"
              :class="{ 'has-text-success line-through': todo.done }"
            >
              {{ todo.content }}
            </div>
            <div class="column is-5 has-text-right">
              <button
                class="button is-light"
                :class="todo.done ? 'is-success' : 'is-light'"
                @click="toggler(todo.id)"
              >
                &check;
              </button>
              <button
                class="button is-danger ml-2"
                @click="deleteToDo(todo.id)"
              >
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
// import
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

// todo Array
const todos = ref([]);

// input
const newToDoContent = ref("");

// send form
const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content: newToDoContent.value,
    done: false,
  };
  todos.value.push(newTodo);
  newToDoContent.value = "";
};

// delete task
const deleteToDo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

// check toggler
const toggler = (id) => {
  const findDone = todos.value.findIndex((todo) => todo.id === id);
  todos.value[findDone].done = !todos.value[findDone].done;
};
</script>















<style>
@import "bulma/css/bulma.min.css";
.wrapper-todo {
  padding: 20px;
  margin: 0 auto;
  max-width: 400px;
}

.line-through {
  text-decoration: line-through;
}
</style>