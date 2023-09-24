import Chart from 'chart.js/auto';
import moment from 'moment/moment';

function showGrafico(datos) {
    document.getElementById('contenedorGrafico').innerHTML = '<canvas id="myChart"></canvas>';
    new Chart(
        document.getElementById('myChart'),
        {
            type: 'line',
            data: {
                labels: datos.map(row => moment(row.fecha, "YYYY-MM-DD").format("YYYY-MM-DD")),
                datasets: [
                    {
                        label: 'UF',
                        data: datos.map(row => row.valor)
                    }
                ]
            }
        }
    );

}
export default showGrafico;