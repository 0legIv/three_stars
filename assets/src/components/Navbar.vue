<template>
  <v-toolbar dark color="orange">
    <v-toolbar-side-icon @click="changeState"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Three stars</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn @click="changeState" icon>
      <v-icon>more_vert</v-icon>
    </v-btn> -->
  </v-toolbar>
</template>

<script>

export default {
    methods: { 
        changeState: function () {
            this.$store.commit('change_state')
        }
    }
}
</script>

<style>
    .toolbar {
        background-color: orange;
        margin-bottom: 20px;
    }
</style>

