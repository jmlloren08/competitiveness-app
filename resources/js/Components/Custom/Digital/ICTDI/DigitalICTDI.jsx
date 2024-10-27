import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function DigitalICTDI() {

    const [chartdataICTDI, setChartDataICTDI] = useState([]);
    const years = ['2023', 'NDA', 'NDA', 'NDA', 'NDA'];
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('/ict-development-index')
            .then(response => {
                const { countries, data } = response.data;
                setCountries(countries.map(item => item.ictdi_country));
                setChartDataICTDI(data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const series = countries.map(country => ({
        name: country,
        data: chartdataICTDI.filter(item => item.ictdi_country === country).map(item => ({
            x: item.ictdi_year,
            y: item.ictdi_count
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
                formatter: (val) => (isNaN(val) || val === null ? 'NDA' : val)
            }
        },
        colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
        markers: {
            size: 4
        }
    }

    const ictdi_economies = ['2023', 'NDA', 'NDA', 'NDA', 'NDA'];

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
                <div className='block md:hidden'>
                    {/* mobile view */}
                    {countries.map(country => (
                        <div key={country} className={`border border-gray-100 rounded-lg mb-4 p-4 ${country === 'Philippines' ? 'bg-blue-300' : 'bg-white'}`}>
                            <h3 className='text-lg font-bold text-blue-900 mb-2'>{`Economy: ${country}`}</h3>
                            {years.map((year, index) => (
                                <div key={index} className='mb-2'>
                                    <span className='font-semibold'>{`${year}: `}</span>
                                    <span>
                                        {chartdataICTDI.find(item => item.ictdi_country === country && item.ictdi_year === year)?.ictdi_count || 'NDA'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className='hidden md:block'>
                    {/* desktop view */}
                    <table className='min-w-full border-collapse'>
                        <thead className='bg-blue-900 text-white'>
                            <tr>
                                <th className='p-2 border md:border-gray-100'>ECONOMY</th>
                                {years.map((year, index) => (
                                    <th className='p-2 border md:border-gray-100' key={index}>{year}</th>
                                ))}
                            </tr>
                            <tr>
                                <th className='p-2 border md:border-gray-100'>Baseline No.</th>
                                {ictdi_economies.map((economy, index) => (
                                    <th className='p-2 border md:border-gray-100' key={index}>{economy}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {countries.map(country => (
                                <tr key={country} className={`border ${country === 'Philippines' ? 'bg-blue-300 font-bold' : 'bg-white'} hover:bg-gray-50`}>
                                    <td className='p-2 text-center'>{country}</td>
                                    {years.map((year, index) => (
                                        <td key={index} className='p-2 text-left sm:text-center'>
                                            {chartdataICTDI.find(item => item.ictdi_country === country && item.ictdi_year === year)?.ictdi_count || 'NDA'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}