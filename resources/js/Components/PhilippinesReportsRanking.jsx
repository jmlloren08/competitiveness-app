import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PhilippinesReportsRanking() {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {

        axios.get('/phils-reports-ranking')
            .then(response => {
                setChartData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });

    }, []);

    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex items-center mr-4'>
                    <span className='w-4 h-4 bg-green-500 rounded-full inline-block mr-2'></span>
                    <span>Top Third</span>
                </div>
                <div className='flex items-center mr-4'>
                    <span className='w-4 h-4 bg-yellow-500 rounded-full inline-block mr-2'></span>
                    <span>Middle Third</span>
                </div>
                <div className='flex items-center mr-4'>
                    <span className='w-4 h-4 bg-red-500 rounded-full inline-block mr-2'></span>
                    <span>Bottom Third</span>
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
                                <td className={`p-2 md:border md:border-gray-300 block md:table-cell ${item.gauge === 'Top Third' ? 'bg-green-500' : item.gauge === 'Middle Third' ? 'bg-yellow-500' : item.gauge === 'Bottom Third' ? 'bg-red-500' : ''}`}>
                                    <span className='inline-block md:hidden font-bold m-0'>Gauge:</span> {item.gauge}</td>
                                <td className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                    <span className='inline-block md:hidden font-bold m-0'>Category:</span> {item.category}</td>
                                <td className='p-2 md:border md:border-gray-300 block md:table-cell'>
                                    <span className='inline-block md:hidden font-bold m-0'>Report: </span><a href={item.route ? route(item.route) : '#'} target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 transform text-md hover:text-lg hover:text-blue-500 hover:font-bold'>{item.report}</a></td>
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

                <div className="flex flex-col text-xs mt-4">
                    <div className='flex items-center'>
                        <p>Legend:</p>
                    </div>
                    <div className='text-xs'>
                        <p>* Worldwide Governance Indicators (WGI)</p>
                    </div>
                    <div className='text-xs'>
                        <p>** Programme for International Student Assessment (PISA)</p>
                    </div>
                </div>

            </div>

        </div >
    );
}