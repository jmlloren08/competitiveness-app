import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function WorldCompetitivenessRanking() {
    const [chartDataWCR, setChartDataWCR] = useState([]);
    const [loadingWCR, setLoadingWCR] = useState(true);
    const [years, setYears] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('/world-competitiveness-ranking')
            .then(response => {
                const { years, countries, data } = response.data;
                setYears(years.map(item => item.wcy_year));
                setCountries(countries.map(item => item.wcy_country));
                setChartDataWCR(data);
                setLoadingWCR(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoadingWCR(false);
            });
    }, []);

    if (loadingWCR) {
        return <div>Loading...</div>;
    }

    const series = countries.map(country => ({
        name: country,
        data: chartDataWCR.filter(item => item.wcy_country === country).map(item => ({
            x: item.wcy_year,
            y: item.wcy_count
        }))
    }));

    const options = {
        chart: {
            type: 'line',
            height: 350,
            toolbar: {
                show: true
            }
        },
        xaxis: {
            type: 'category',
            title: {
                text: 'Year'
            },
            min: 0
        },
        yaxis: {
            min: 0
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                }
            }
        },
        colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
        markers: {
            size: 4
        }
    };

    return (
        <div>
            <h2 className='text-white text-center font-bold bg-blue-900 p-3'>CHART</h2>
            <Chart
                options={options}
                series={series}
                type='line'
                height={350}
                className='mt-3'
            />

            <div className='overflow-x-auto mt-6'>
                <h2 className='text-white text-center font-bold bg-blue-900 p-3'>TABLE</h2>
                <table className='min-w-full border-collapse block md:table'>
                    <thead className='block md:table-header-group'>
                        <tr className='block border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell' rowSpan={2}>Economy</th>
                            <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell' rowSpan={2}>Baseline No.</th>
                            {years.map(year => (
                                <th className='bg-blue-900 p-2 text-white font-bold md:border md:border-gray-300 block md:table-cell' colSpan={1} key={year}>{year}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='block md:table-row-group'>
                        {countries.map(country => (
                            <tr key={country} className='bg-white border border-gray-300 md:border-none block md:table-row'>
                                <td className='p-2 md:border md:border-gray-300 md:table-cell'>{country}</td>
                                <td className='p-2 md:border md:border-gray-300 md:table-cell'>{63}</td> {/* Assuming baseline no. is 63 */}
                                {years.map(year => (
                                    <td key={year} className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                        {chartDataWCR.find(item => item.wcy_country === country && item.wcy_year === year)?.wcy_count || 'NDA'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
