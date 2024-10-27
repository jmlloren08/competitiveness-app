import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

export default function IndicatorRankingHNGHSI() {
    const [chartData, setChartData] = useState({
        series: [],
        categories: []
    });

    const [selectedYear, setSelectedYear] = useState('2021');
    const availableYears = ['2021', '2019'];

    useEffect(() => {
        fetchChartData();
    }, [selectedYear]);

    const fetchChartData = () => {
        axios.get('/get-hn-ghsi-indicator-ranking')
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

    return (
        <div>
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
                            const isMainCategory = [
                                'Prevention of the Emergence or Release of Pathogens',
                                'Early Detection & Reporting for Epideimcs of Potential International Concern',
                                'Rapid Response to and Mitigation of the Spread of an Epidemic',
                                'Sufficient & Robust Health System to Treat the Sick & Protect Health Workers',
                                'Commitments to Improving National Capacity, Financing and Adherance to Norms',
                                'Overall Risk Environment & Country Vulnerability to Biological Threats'
                            ].includes(seriesItem.name);
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
    )
}