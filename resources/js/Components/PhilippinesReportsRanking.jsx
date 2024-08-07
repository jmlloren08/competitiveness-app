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
            source_publisher: item.source_publisher,
            remarks: item.remarks,
            year: item.as_of,
            gauge: item.gauge,
            category: item.category,
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
            <div className='flex justify-center'>
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

            <div className="flex flex-col mt-4">
                <div className='text-xs flex items-center mb-2'>
                    <span className='w-4 h-4 bg-gray-500 rounded-full inline-block mr-2'></span>
                    <span>Legend</span>
                </div>
                <div className='text-xs'>
                    <p>* = Score (only available data).</p>
                </div>
                <div className='text-xs'>
                    <p>** = Average score wherein theoretically no minimum or maximum score in PISA; rather, the results are scaled to fit approximately normal distributions, with means around 500 score points.</p>
                </div>
                <div className='text-xs'>
                    <p>*** = Percentile rank among all countries (ranges from 0 (lowest) to 100 (highest) rank).</p>
                </div>
                <div className='text-xs'>
                    <p>**** = except WGI - Voice and Accountability with only 208 participating countries for 2022.</p>
                </div>
            </div>

            <div className="overflow-x-auto mt-6">
                <h2 className='text-white text-center font-bold bg-blue-900 p-3'>TABLE</h2>
                <table className='min-w-full border-collapse block md:table'>
                    <thead className='block md:table-header-group'>
                        <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell'>Gauge</th>
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell'>Category</th>
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell'>Report</th>
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell'>Source/Publisher</th>
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell'>Rank</th>
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell'>As Of</th>
                        </tr>
                    </thead>
                    <tbody className='block md:table-row-group'>
                        {chartData.map((item, index) => (
                            <tr key={index} className='bg-white border border-gray-300 md:border-none block md:table-row even:bg-gray-50 hover:bg-gray-100'>
                                <td className={`p-2 md:border md:border-gray-300 block md:table-cell ${item.gauge === 'Top Third' ? 'bg-green-500' : item.gauge === 'Middle Third' ? 'bg-yellow-500' : item.gauge === 'Bottom Third' ? 'bg-red-500' : 'bg-gray-500'}`}>
                                    <span className='inline-block md:hidden font-bold m-0'>Gauge:</span> {item.gauge}</td>
                                <td className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                    <span className='inline-block md:hidden font-bold m-0'>Category:</span> {item.category}</td>
                                <td className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                    <span className='inline-block md:hidden font-bold m-0'>Report:</span> {item.report}</td>
                                <td className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                    <span className='inline-block md:hidden font-bold m-0'>Source/Publisher:</span> {item.source_publisher}</td>
                                <td className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                    <span className='inline-block md:hidden font-bold m-0'>Rank:</span> {item.remarks}</td>
                                <td className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                    <span className='inline-block md:hidden font-bold m-0'>As of:</span> {item.as_of}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}