<template>
  <v-layout row justify-center>
    <v-dialog v-model="isActive" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">New currency</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>

                <v-flex>
                    <v-text-field v-model="curr_name" 
                    label="Name" maxlength="20" required></v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field v-model="curr_symb_code" label="Symbol code" maxlength="3"></v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field v-model="curr_digit_code" label="Digital code"></v-text-field>
                </v-flex>

            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="saveCurrency">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import {requests} from '../js/requests'

  export default {
      name: 'CurrencyDialog',
    data () {
      return {
        notifications: false,
        sound: true,
        widgets: false,
        items: [],
        curr_name: '',
        curr_symb_code: '',
        curr_digit_code: 0
      }
    },
    methods:
    { 
        closeDialog: function() {
            this.$store.commit("change_dialog_state")
        },
        saveCurrency: function() {
            var body = {name: this.curr_name, code_name: this.curr_symb_code}
            requests.newCurrency(body)
            this.$store.dispatch("update_currency_data")
            this.$store.commit("change_dialog_state")
        }
    },
    computed: {
        isActive: function() {
            return this.$store.getters.getDialogState
        }
    }
  }
</script>