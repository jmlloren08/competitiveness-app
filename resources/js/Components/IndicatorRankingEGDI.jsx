import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios';

export default function IndicatorRankingEGDI() {
    const [chartData, setChartData] = useState({
        series: [],
        categories: []
    });

    const [selectedYear, setSelectedYear] = useState('2022');
    const availableYears = ['2022', '2020', '2018', '2016', '2014'];

    useEffect(() => {
        fetchChartData();
    }, [selectedYear]);

    const fetchChartData = () => {
        axios.get('/get-indicator-ranking-egdi')
            .then(response => {
                const data = response.data;
                // process the data based on the selected year
                processChartData(data[selectedYear]);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }

    const processChartData = (yearData) => {
        if (!yearData) return;

        const categories = [];
        const seriesData = {};

        yearData.forEach(item => {
            if (!categories.includes(item.country)) {
                categories.push(item.country);
            }
            const subcategory = item.indicator_ranking;

            if (!seriesData[subcategory]) {
                seriesData[subcategory] = [];
            }

            seriesData[subcategory].push(item.counts);
        });

        const series = Object.keys(seriesData).map(subcategory => ({
            name: subcategory,
            data: seriesData[subcategory]
        }));

        setChartData({
            series: series,
            categories: categories
        });
    }

    const options = {
        chart: {
            type: 'bar',
            height: 400,
            toolbar: {
                show: true
            }
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            categories: chartData.categories
        },
        legend: {
            position: 'top'
        },
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false
        }
    }

    return (
        <div>
            <h2 className='text-white text-center font-bold bg-blue-900 p-3'>CHART</h2>

            <div className='text-center my-4 flex flex-col sm:flex-row items-center justify-center'>
                <h1 className='mr-2'>Select year:</h1>
                <select
                    className="p-2 border rounded"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value='' disabled>Select year</option>
                    {availableYears.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <Chart
                options={options}
                series={chartData.series}
                type='bar'
                height={400}
                className='mt-6'
            />

            <div className='mt-8 overflow-x-auto'>
                <h2 className='text-white text-center font-bold bg-blue-900 p-3'>TABLE</h2>
                <table className='min-w-full bg-white border text-sm sm:table hidden'>
                    <thead className='bg-blue-900 text-white'>
                        <tr>
                            <th className='px-4 py-2 border'>Indicator Ranking ({selectedYear})</th>
                            {chartData.categories.map((category, index) => (
                                <th key={index} className='px-4 py-2 border'>{category}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {chartData.series.map((seriesItem, seriesIndex) => {
                            const isMainCategory = ['Online Service Index (OSI)', 'Human Capital Index (HCI)', 'Telecommunications Infrastructure Index (TII)'].includes(seriesItem.name);
                            const rowBgColor = isMainCategory ? 'bg-blue-800 text-white' : 'bg-blue-100';
                            return (
                                <tr key={seriesIndex} className='even:bg-gray-50 hover:bg-gray-100'>
                                    <td className={`px-4 py-2 border font-bold ${rowBgColor}`}>{seriesItem.name}</td>
                                    {seriesItem.data.map((dataItem, dataIndex) => (
                                        <td key={dataIndex} className='px-4 py-2 border text-center'>
                                            {dataItem || 0}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {/* mobile screen */}
                <div className='sm:hidden block'>
                    {chartData.series.map((seriesItem, seriesIndex) => (
                        <div key={seriesIndex} className='bg-white border mb-4'>
                            <div className='font-bold p-2 bg-blue-800 text-white'>Indicator Ranking ({selectedYear})</div>
                            <div className='font-bold p-2 bg-blue-800 text-white'>{seriesItem.name}</div>
                            <div>
                                {seriesItem.data.map((dataItem, dataIndex) => (
                                    <div key={dataIndex} className='flex justify-between p-2 border-b'>
                                        <div className='font-semibold'>{chartData.categories[dataIndex]}</div>
                                        <div>{dataItem || 0}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}