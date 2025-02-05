<script setup>
import { computed, ref } from 'vue';

const newTodo = ref("");
const todos = ref([]);

const addedTodos = computed(() => [...todos.value,...newTodo.value]);

const addTodo = () => {
    if (newTodo.value.trim()) {
        todos.value.push(newTodo.value);
        newTodo.value = "";
    }
}


</script>

<template>
    <div class="todo">
        <div class="todo__header">
            <div class="todo__title">
                My To Do List
            </div>
            <div class="todo__add-todo">
                <input v-model="newTodo" type="text" placeholder="Title...">
                <button @click="addTodo">Add</button>
            </div>
        </div>

        <div class="todo__added" v-for="(todo, index) in addedTodos" :key="index">
            <ul>
                <li>{{ todo }}</li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
            border: none;
            background-color: #bbb;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s linear;
        }

        button:hover {
            background-color: #555;
        }
    }
}
</style>