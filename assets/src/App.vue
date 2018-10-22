<template>
    <div id="app">
        <!-- 
        <router-view></router-view> -->
        <navbar></navbar>
        <sidebar></sidebar>
        <router-view></router-view>
        <!-- <layout></layout> -->
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar'
    import Navbar from './components/Navbar'
    import Layout from './components/Layout'

    export default {
        name: 'app',
        components: {
            Sidebar,
            Navbar,
            Layout
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
</style>