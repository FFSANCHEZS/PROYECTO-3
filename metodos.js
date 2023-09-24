import moment from 'moment/moment';

function showData(datos) {

    let html = "";                                       // variable que se utilizara para pintar en el tbody la tabla de la data
    datos.forEach(function (element, index) {       // se recorre con forEach la lista de persona y el elemento que encuentre lo almacenara 
        // se crea la celda de cada elemento
        html += "<tr>";
        html += "<td>" + moment(element.fecha, "YYYY-MM-DD").format("YYYY-MM-DD") + "</td>";
        html += "<td>UF " + element.valor + "</td>";
        html += "</tr>";
    });
    document.querySelector('#tableData tbody').innerHTML = html;        // querySelector -> trae el tbody, inserta dentro de el contenido de la variable html

}
export default showData;