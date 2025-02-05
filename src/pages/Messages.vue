<script setup>

</script>

<template>
    <div class="messages">
        <div class="messages-body">
            <h1 class="messages-body__greeting">User Name: {{ $route.query.name }}</h1>
            <p class="messages-body__email">User Email: {{ $route.query.email }}</p>
            <p class="messages-body__message">Message: {{ $route.query.message }}</p>
        </div>
        <router-link to="/">
            <button class="messages-body__button">Go Back</button>
        </router-link>
    </div>
</template>




<style>
.messages {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.messages-body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    max-width: 650px;
    margin: 30px auto;
    text-align: left;
    line-height: 1.6;
}

.messages-body__greeting {
    font-size: 30px;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
}

.messages-body__email,
.messages-body__message {
    font-size: 18px;
    color: #444;
    margin-bottom: 12px;
}

.messages-body__email {
    font-weight: 500;
}

.messages-body__message {
    font-style: italic;
    color: #666;
}

.messages-body__button {
    display: inline-block;
    background-color: #28a745;
    color: #fff;
    padding: 12px 30px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
    text-decoration: none;
    margin-top: 20px;
}

.messages-body__button:hover {
    background-color: #218838;
    transform: translateY(-2px);
}

.messages-body__button:active {
    background-color: #1e7e34;
    transform: translateY(0);
}
</style>
