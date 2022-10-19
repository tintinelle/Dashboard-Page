'use strict';

// подключаем модули
const moment = require('moment');
const Chart = require('chart.js');
const anime = require('animejs');

// Работа с Anime.js
anime({
    targets: 'div',
    scale: [{
            value: .1,
            easing: 'easeOutSine',
            duration: 500
        },
        {
            value: 1,
            easing: 'easeInOutQuad',
            duration: 1200
        }
    ],
    delay: anime.stagger(200, {
        grid: [14, 5],
        from: 'center'
    })
});

// Работа с Moment
let date = moment().format('MMMM Do YYYY, h:mm a');
document.getElementById('currentDate').innerHTML = `Current date: ${date}`;

// Работа с Chart.js

// Doughnut Chart

const salesData = [379, 236];

const configSales = {
    type: 'doughnut',
    data: {
        labels: [
            'Completed sales',
            'Sales in progress'
        ],
        datasets: [{
            label: 'Sales',
            data: salesData,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }
};

module.exports = {
    actions: [],
    config: configSales,
};

const myChart = new Chart(document.getElementById('doughnutChart'), configSales);


// Bar Chart
const brandsData = [0.56, 0.48, 0.37, 0.22];

const brandsChart = new Chart(document.getElementById('brandsChart'), {
    type: 'bar',
    data: {
        labels: ['Adidas', 'Nike', 'Puma', 'Bosco'],
        datasets: [{
            label: '% of sales',
            data: brandsData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(100, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(120, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',

        plugins: {
            title: {
                display: true,
                text: 'Top selling brands',
                padding: {
                    top: 10,
                    bottom: 10
                },
                font: {
                    size: 24
                }
            }
        },

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

// Mixed Chart

const sizesDataBar = [0.78, 0.82, 0.65, 0.57, 0.58, 0.62, 0.59, 0.26, 0.10];
const sizesDataLine = [0.73, 0.78, 0.60, 0.52, 0.53, 0.57, 0.54, 0.21, 0.05];

const sizesChart = new Chart(document.getElementById('sizesChart'), {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Current % of sales',
            data: sizesDataBar,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }, {
            type: 'line',
            label: 'Previous % of sales',
            data: sizesDataLine,
            borderColor: 'rgb(54, 162, 235)'
        }],
        labels: ['10', '9.5', '9', '8.5', '8', '7.5', '7', '6.5', '6']
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Top selling sizes',
                padding: {
                    top: 10,
                    bottom: 10
                },
                font: {
                    size: 24
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    format: {
                        style: 'percent'
                    }
                }
            }
        },
    }
});