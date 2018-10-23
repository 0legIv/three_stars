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
      items: [
 {
    "code": "GBP",
    "alphaCode": "GBP",
    "numericCode": "826",
    "name": "U.K. Pound Sterling",
    "rate": 0.76721923664213,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 1.3034084030227
  },
  {
    "code": "CAD",
    "alphaCode": "CAD",
    "numericCode": "124",
    "name": "Canadian Dollar",
    "rate": 1.3033072643392,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.76727877405565
  },
  {
    "code": "JPY",
    "alphaCode": "JPY",
    "numericCode": "392",
    "name": "Japanese Yen",
    "rate": 112.43863444721,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.0088937401713955
  },
  {
    "code": "CHF",
    "alphaCode": "CHF",
    "numericCode": "756",
    "name": "Swiss Franc",
    "rate": 0.99612777817633,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 1.0038872742117
  },
  {
    "code": "AUD",
    "alphaCode": "AUD",
    "numericCode": "036",
    "name": "Australian Dollar",
    "rate": 1.4036923660021,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.71240680951207
  },
  {
    "code": "RWF",
    "alphaCode": "RWF",
    "numericCode": "646",
    "name": "Rwandan franc",
    "rate": 897.39856801906,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.0011143320656366
  },
  {
    "code": "SLL",
    "alphaCode": "SLL",
    "numericCode": "694",
    "name": "Sierra Leonean leone",
    "rate": 8683.8337182446,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.0001151565117949
  },
  {
    "code": "MVR",
    "alphaCode": "MVR",
    "numericCode": "462",
    "name": "Maldivian rufiyaa",
    "rate": 15.654038301415,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.0638812797532
  },
  {
    "code": "COP",
    "alphaCode": "COP",
    "numericCode": "170",
    "name": "Colombian Peso",
    "rate": 3087.760056988,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.00032385936133116
  },
  {
    "code": "PKR",
    "alphaCode": "PKR",
    "numericCode": "586",
    "name": "Pakistani Rupee",
    "rate": 133.69515179816,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.007479702790642
  },
  {
    "code": "TRY",
    "alphaCode": "TRY",
    "numericCode": "949",
    "name": "Turkish Lira",
    "rate": 5.6393371771723,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.17732580418279
  },
  {
    "code": "AMD",
    "alphaCode": "AMD",
    "numericCode": "051",
    "name": "Armenia Dram",
    "rate": 486.89444177338,
    "date": "Mon, 22 Oct 2018 00:00:01 GMT",
    "inverseRate": 0.0020538332628275
  }
]
    }
  },
  methods:
  { 
    updateCurrency: function () {
     this.axios.get('http://0.0.0.0:4000/api/currencies').then(function (response) {
        var body = JSON.parse(response.data)
        console.log(response)
        this.items = body.data
      }).catch(function (error) {
            // handle error
            console.log(error);
      })
        .then(function () {
            // always executed
      });  
    }
  },
  beforeMount(){
    this.updateCurrency()
  }
}

</script>