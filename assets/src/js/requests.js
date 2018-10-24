import axios from 'axios'

var requests = {
        getCurrency() {
            axios.get('http://0.0.0.0:4000/api/currencies', { timeout: 2000 }).then((response) => {
                var data = response.data.data
                console.log(data)
                return data;       
            }).catch(function (error) {
                console.log(error);
            });
        },

        newCurrency(body) {
            axios.post("http://0.0.0.0:4000/api/currencies", {
                        currencies: body
            })
        }
}

export {requests}