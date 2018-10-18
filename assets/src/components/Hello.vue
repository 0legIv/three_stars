<template>
  <div class="hello">
    <h3>Hello from Vue.js!</h3>
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
        methods: {
            get_users: function() {
                axios.get('/api/users')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
            }
        }
    }
</script>

<style scoped>
    p {
        margin-top: 40px;
    }
</style>