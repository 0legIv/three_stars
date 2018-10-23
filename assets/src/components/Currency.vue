<template>
  <div>
    <b-table striped hover :items="items"></b-table>
    <!-- <button v-on:click="updateCurrency">Update</button> -->
  </div>
</template>

<script>

export default {
  name: 'Currency',
  data () {
    return {
      items: []
    }
  },
  methods:
  { 
    updateCurrency: function () {
     this.axios.get('http://0.0.0.0:4000/api/currencies').then((response) => {
        this.items = response.data.data       
      }).catch(function (error) {
            console.log(error);
      })
        .then(function () {
      });  
    }
  },
  beforeMount(){
    this.updateCurrency()
  }
}

</script>