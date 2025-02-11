<script setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue";
const newTodo = ref("");
const todos = ref([]);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      title: newTodo.value,
      isDone: false,
    });
    newTodo.value = "";
  }
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>
<template>
  <div class="todo">
    <div class="todo__header">
      <div class="todo__title">My New To Do List</div>
      <form @submit.prevent="addTodo" class="todo__add-todo">
        <input v-model="newTodo" type="text" placeholder="Title..." />
        <button>Add</button>
      </form>
    </div>

    <!-- <div class="todo__added"> -->
    <ul class="todo__list">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        @click="() => (todo.isDone = !todo.isDone)"
        class="todo__item"
        :class="{ todo__underline: todo.isDone }"
      >
        <span class="todo__text"> {{ index + 1 }}. {{ todo.title }} </span>
        <button @click="removeTodo(index)" class="todo__remove">x</button>
      </li>
    </ul>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.animate {
  transition: all 0.5s ease-in-out;
  transform: scale(1.1);
  background-color: lightgreen;
}

.todo {
  width: 100%;
  height: 100vh;

  &__header {
    background-color: #f44336;
    text-align: center;
    color: white;
    padding-bottom: 40px;
  }

  &__title {
    color: white;
    font-size: 25px;
    padding: 20px 0 5px 0;
  }

  &__add-todo {
    display: flex;
    width: 70%;
    height: 50px;
    margin: 0 auto;

    input {
      width: 80%;
      height: 100%;
      font-size: 20px;
      border: none;
      padding: 0 0 0 10px;
    }

    button {
      width: 20%;
      height: 100%;
      font-size: 18px;
      border: none;
      background-color: #bbb;
      cursor: pointer;
      transition: background-color 0.3s linear;
    }

    button:hover {
      background-color: #555;
    }
  }

  &__added {
    width: 100%;
    background: #f9f9f9;
    cursor: pointer;
    transition: background-color 0.3s linear;
  }

  &__underline {
    span {
      text-decoration: line-through;
    }
  }

  &__list {
    width: 100%;
  }

  &__underline::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 2px 2px 0;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }

  &__item {
    padding: 20px 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:hover {
      background-color: #bcbaba;
    }

    &:nth-child(odd) {
      background-color: #ddd !important;
    }
  }

  &__remove {
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
