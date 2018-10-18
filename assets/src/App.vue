<template>
    <div id="app">
        <header>
            <h1>Phoenix Vue</h1>
        </header>
        <main>
            <router-link to="/users">here</router-link>
            <router-link to="/hello">hello</router-link>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Hello from './components/Hello'
    import Sidebar from './components/Sidebar'

    export default {
        name: 'app',
        components: {
            Hello,
            Sidebar
        }
    }
</script>

<style>
    #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
    }
    main {
        margin-top: 60px;
    }
</style>