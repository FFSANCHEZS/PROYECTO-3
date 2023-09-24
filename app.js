import axios from 'axios';   // importacion de axios
import moment from 'moment/moment';
import showData from './metodos';

axios.get('https://mindicador.cl/api/uf')
    .then(function (response) {

        console.log(response);
        showData(response.data.serie);

    })
    .catch(function (error) {

        console.log(error);
    });

console.log("Termino de cargar")

// const fechaHoy = document.getElementById('fechaHoy');
// fechaHoy.append(moment().format("MMM Do YY"));