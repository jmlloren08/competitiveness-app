import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function DigitalDQOLI() {
    const [chartDataDQLI, setChartDataDQLI] = useState([]);
    const [years, setYears] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('/digital-quality-of-life-index')
            .then(response => {
                const { years, countries, data } = response.data;
                setYears(years.map(item => item.dqli_year));
                setCountries(countries.map(item => item.dqli_country));
                setChartDataDQLI(data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [])

    const series = countries.map(country => ({
        name: country,
        data: chartDataDQLI.filter(item => item.dqli_country === country).map(item => ({
            x: item.dqli_year,
            y: item.dqli_count
        }))
    }));

    const options = {
        chart: {
            type: 'line',
            height: 350
        },
        xaxis: {
            type: 'Category',
            title: {
                text: 'Year'
            },
            min: 0
        },
        yaxis: {
            min: 1,
            reversed: true,
            title: {
                text: 'Rank'
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    if (val === null || val === undefined || isNaN(val)) {
                        return 'NDA';
                    }
                    return val;
                }
            }
        },
        colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
        markers: {
            size: 4
        }
    }

    const dqli_economies = ['65 economies', '85 economies', '110 economies', '117 economies', '121 economies'];

    return (
        < div >
            <h2 className='text-white text-center font-bold bg-blue-900 p-3'>CHART</h2>
            <Chart
                options={options}
                series={series}
                type='line'
                height={350}
                className='mt-3 border border-gray-100 rounded-lg'
            />

            <div className='overflow-x-auto mt-6'>
                <h2 className='text-white text-center font-bold bg-blue-900 p-3'>TABLE</h2>
                <div className="block md:hidden">
                    {/* mobile view */}
                    {countries.map(country => (
                        <div key={country} className={`border border-gray-100 rounded-lg mb-4 p-4 ${country === 'Philippines' ? 'bg-blue-300' : 'bg-white'}`}>
                            <h3 className='text-lg font-bold text-blue-900 mb-2'>{`Economy: ${country}`}</h3>
                            {years.map(year => (
                                <div key={year} className='mb-2'>
                                    <span className='font-semibold'>{`${year}: `}</span>
                                    <span>
                                        {chartDataDQLI.find(item => item.dqli_country === country && item.dqli_year === year)?.dqli_count || 'NDA'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="hidden md:block">
                    {/* desktop view */}
                    <table className='min-w-full border-collapse'>
                        <thead className='bg-blue-900 text-white'>
                            <tr>
                                <th className='p-2 border md:border-gray-100'>ECONOMY</th>
                                {years.map(year => (
                                    <th className='p-2 border md:border-gray-100' key={year}>{year}</th>
                                ))}
                            </tr>
                            <tr>
                                <th className='p-2 border md:border-gray-100'>Baseline No.</th>
                                {dqli_economies.map((economy, index) => (
                                    <th className='p-2 border md:border-gray-100' key={index}>{economy}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {countries.map(country => (
                                <tr key={country} className={`border ${country === 'Philippines' ? 'bg-blue-300 font-bold' : 'bg-white'} hover:bg-gray-50`}>
                                    <td className='p-2 text-center'>{country}</td>
                                    {years.map(year => (
                                        <td key={year} className='p-2 text-left sm:text-center'>
                                            {chartDataDQLI.find(item => item.dqli_country === country && item.dqli_year === year)?.dqli_count || 'NDA'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
}