<template>
  <v-layout
    wrap
  >
    <v-navigation-drawer
      v-model="isActive"
      temporary
      absolute
    >
      <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        sub-group
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile>

          <v-list-tile
            v-for="(setting, i) in settings"
            :key="i"
            :to="setting.link"
          >
            <v-list-tile-title v-text="setting.text"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="setting.icon"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        active: false,
        settings: [
            {
              icon: 'settings', 
              text: 'Currencies', 
              link: '/currencies'  
            },
            {icon: 'settings', text: 'Users', link: '/layout'},
            {icon: 'settings', text: 'Dialog', link: '/dialog'}
          ]
      }
    },
    computed: {
      isActive() {
        return this.$store.getters.getSidebarState
      }
    }
  }
</script>