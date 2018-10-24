<template>
  <div>
    <v-btn v-on:click="newCurrency" color="green">Add</v-btn>
    <b-table hover :items="getItems">
    </b-table>
    <currency-dialog></currency-dialog>
    <!-- <button v-on:click="updateCurrency">Update</button> -->
  </div>
</template>

<script>
import CurrencyDialog from '@/components/CurrencyDialog.vue'
import {requests} from '../js/requests'

export default {
  name: 'Currency',
  data () {
    return {
      items: []
    }
  },
  components: {
    CurrencyDialog
  },
  methods:
  { 
    updateCurrency: function () {
    //  this.axios.get('http://0.0.0.0:4000/api/currencies').then((response) => {
    //     this.items = response.data.data       
    //   }).catch(function (error) {
    //         console.log(error);
    //   })
    //     .then(function () {
    //   });  
      // this.items = requests.getCurrency()
      this.$store.dispatch('update_currency_data')
        // this.$store.commit("change_currency_data")
    },
    newCurrency: function () {
      this.$store.commit("change_dialog_state")
    }
  },
  computed: {
    getItems: function() {
      return this.$store.getters.getCurrencyData
    }
  },
  beforeMount(){
    this.updateCurrency()
  }
}

</script>