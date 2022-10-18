'use strict';

const moment = require('moment');
let date = moment().format('MMMM Do YYYY, h:mm a');

document.getElementById('currentDate').innerHTML = `Current date: ${date}`;

// вапр
const Chart = require('chart.js');
const salesChart = document.getElementById('doughnutChart').getContext('2d');


const dataSales = {
    labels: [
        'Completed sales',
        'Sales in progress'
    ],
    datasets: [{
        label: 'Sales',
        data: [379, 236],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
// </block:setup>

// <block:config:0>
const configSales = {
    type: 'doughnut',
    data: dataSales,
};
// </block:config>

module.exports = {
    actions: [],
    config: configSales,
};

const myChart = new Chart(salesChart, configSales);

const ctxBrands = document.getElementById('brandsChart')

const brandsChart = new Chart(ctxBrands, {
    type: 'bar',
    data: {
        labels: ['Adidas', 'Nike', 'Puma', 'Bosco'],
        datasets: [{
            label: 'Brand',
            data: [0.56, 0.48, 0.37, 0.22],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',

        scales: {
            x: {
                ticks: {
                    format: {
                        style: 'percent'
                    }
                }
            }
        }
    }
});