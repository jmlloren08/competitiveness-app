import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios';

export default function IndicatorRankingDQLI() {
    const [chartData, setChartData] = useState({
        series: [],
        categories: []
    });

    const [selectedYear, setSelectedYear] = useState('2023');
    const availableYears = ['2023', '2022', '2021', '2020', '2019'];

    useEffect(() => {
        fetchChartData();
    }, [selectedYear]);

    const fetchChartData = () => {
        axios.get('/get-indicator-ranking-dqli')
            .then(response => {
                const data = response.data;
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
            seriesData[subcategory] = seriesData[subcategory] || [];
            seriesData[subcategory].push({ x: item.country, y: isNaN(item.counts) ? null : item.counts });
        });

        const series = Object.keys(seriesData).map(subcategory => ({
            name: subcategory,
            data: seriesData[subcategory]
        }));

        setChartData({
            series: series,
            categories: categories,
        });
    }

    const options = {
        chart: {
            type: 'heatmap',
            height: 950,
            toolbar: {
                show: true
            }
        },
        plotOptions: {
            heatmap: {
                colorScale: {
                    inverse: true
                }
            }
        },
        xaxis: {
            categories: chartData.categories,
            position: 'top',
            labels: {
                align: 'center',
                offsetX: 0,
                offsetY: 0,
                style: {
                    fontSize: '9px',
                    fontWeight: 'bold',
                }
            }
        },
        yaxis: {
            title: {
                text: 'Indicator Ranking',
                align: 'center',
                offsetX: 10,
                offsetY: 0,
                style: {
                    fontSize: '12px'
                }
            },
        },
        tooltip: {
            y: {
                formatter: (val) => (`Rank: ${isNaN(val) || val === null ? 'NDA' : val}`)
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
                fontWeight: 'normal',
                colors: ['#000']
            }
        },
        colors: ['#e74c3c'],
        title: {
            text: 'Rank (Lighter Color = Higher Rank | Darker Color = Lower Rank)',
            align: 'center',
            style: {
                fontSize: '10px',
                fontWeight: 'normal',
            }
        },
    }

    return (
        <div>
            <h2 className='text-white text-center font-bold bg-blue-900 p-3'>HEATMAP CHART</h2>

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
                type='heatmap'
                height={950}
                className='mt-6'
            />

            <div className='overflow-x-auto'>
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
                            const isMainCategory = ['Internet Affordability', 'Internet Quality', 'e-Infrastructure', 'e-Security', 'e-Government'].includes(seriesItem.name);
                            const rowBgColor = isMainCategory ? 'bg-blue-800 text-white' : 'bg-blue-100';
                            return (
                                <tr key={seriesIndex} className='even:bg-gray-50 hover:bg-gray-100'>
                                    <td className={`px-4 py-2 border font-bold ${rowBgColor}`}>{seriesItem.name}</td>
                                    {seriesItem.data.map((dataItem, dataIndex) => (
                                        <td key={dataIndex} className='px-4 py-2 border text-center'>
                                            {dataItem.y || 'NDA'}
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
                                        <div>{dataItem.y || 'NDA'}</div>
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