import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function PhilippinesReportsRanking() {

    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get('/phils-reports-ranking')
            .then(response => {
                setChartData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    const series = [{
        name: 'Rank',
        data: chartData.map(item => ({
            x: item.report,
            y: item.ranks,
            remarks: item.remarks,
            year: item.as_of,
            gauge: item.gauge,
            fillColor: item.gauge === 'Bottom Third' ? '#ef4444' :
                item.gauge === 'Middle Third' ? '#eab308' :
                    item.gauge === 'Top Third' ? '#22c55e' :
                        '#6b7280'
        }))
    }];

    const options = {
        chart: {
            type: 'bar',
            height: 600,
            toolbar: {
                show: true
            }
        },
        xaxis: {
            type: 'category',
            categories: chartData.map(item => item.report),
            labels: {
                rotate: -45
            }
        },
        yaxis: {
            title: {
                text: 'Ranks'
            },
            min: 0
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                }
            },
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const data = w.config.series[seriesIndex].data[dataPointIndex];
                return `<div class="arrow_box"><strong>${data.x}</strong><br>Rank: ${data.remarks}<br>Year: ${data.year}<br>Gauge: ${data.gauge}</div>`
            }
        },
        legend: {
            show: false
        },
        colors: chartData.map(item => item.gauge === 'Bottom Third' ? '#ef4444' :
            item.gauge === 'Middle Third' ? '#eab308' :
                item.gauge === 'Top Third' ? '#22c55e' :
                    '#6b7280'),

        plotOptions: {
            bar: {
                distributed: true
            }
        }
    }

    return (
        <div>
            <div className='flex justify-center mb-4'>
                <div className='flex items-center mr-4'>
                    <span className='w-4 h-4 bg-red-500 rounded-full inline-block mr-2'></span>
                    <span>Bottom Third</span>
                </div>
                <div className='flex items-center mr-4'>
                    <span className='w-4 h-4 bg-yellow-500 rounded-full inline-block mr-2'></span>
                    <span>Middle Third</span>
                </div>
                <div className='flex items-center mr-4'>
                    <span className='w-4 h-4 bg-green-500 rounded-full inline-block mr-2'></span>
                    <span>Top Third</span>
                </div>
            </div>
            <Chart
                options={options}
                series={series}
                type='bar'
                height={600}
            />
        </div>
    );
}