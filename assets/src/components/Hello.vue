<template>
  <div class="hello">
    <p>{{msg}}</p>
    <button v-on:click="get_users">users</button>
  </div>
</template>

<script>
    const axios = require('axios');

    export default {
        users: [],
        data() {
            return {
                msg: 'Simple example using Phoenix, Vue and Webpack.'
            }
        },
    }
</script>

<style scoped>
    p {
        margin-top: 40px;
    }
</style>