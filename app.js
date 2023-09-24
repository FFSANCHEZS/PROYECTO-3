import axios from 'axios';   // importacion de axios
import moment from 'moment/moment';
import showData from './metodos';
import showGrafico from './grafico';

function validateForm() {
    // se obtienen los valores de los campos desde el html
    let fechaInicio = document.getElementById('inputInicio').value;
    let fechaFinal = document.getElementById('inputFinal').value;

    // validar fecha de inicio
    if (fechaInicio == "") {
        alert('Fecha de inicio es requerida')
        return false;
    }

    // validar fecha final
    if (fechaFinal == "") {
        alert('Fecha final es requerida')
        return false;
    }


    // si pasa todas las validaciones es verdadero
    return true;

}

function cargarDatos(fechaInicio=null, fechaFinal=null) {
    axios.get('https://mindicador.cl/api/uf')
        .then(function (response) {

            console.log(response);
            console.log(fechaInicio);
            let datos=response.data.serie;
            if(fechaInicio!=null && fechaFinal!=null){
                console.log("entro")
                let fechaSeleccionada = [];
                datos.forEach(function (element, index) { 
                    if(fechaInicio <= moment(element.fecha, "YYYY-MM-DD") && fechaFinal >= moment(element.fecha, "YYYY-MM-DD")){
                        fechaSeleccionada.push(element);
                    }
                });
                showData(fechaSeleccionada);
                showGrafico(fechaSeleccionada);
            }else {
                showData(datos);
                showGrafico(datos);
            }
            
        })
        .catch(function (error) {

            console.log(error);
        });

}

const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener("click", function () {
    if (validateForm() == true) {
        let fechaInicio = moment(document.getElementById('inputInicio').value, "YYYY-MM-DD");
        let fechaFinal = moment(document.getElementById('inputFinal').value, "YYYY-MM-DD");

        console.log(fechaInicio)
        console.log(fechaFinal)
        cargarDatos(fechaInicio, fechaFinal);
    }
});
// fechaHoy.append(moment().format("MMM Do YY"));

(async function () {
    cargarDatos();
})();