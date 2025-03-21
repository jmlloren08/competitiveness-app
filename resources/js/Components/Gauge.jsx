import React from 'react';
import PropTypes from 'prop-types';

const Gauge = ({ gauge }) => {

    const gaugeColors = {
        'Bottom Third': '#ef4444',
        'Middle Third': '#eab308',
        'Top Third': '#22c55e'
    }

    const gaugeLabels = {
        'Bottom Third': 'BOTTOM THIRD',
        'Middle Third': 'MIDDLE THIRD',
        'Top Third': 'TOP THIRD',
        'NDA': 'NDA'
    }

    const gaugeAngles = {
        'Bottom Third': -60,
        'Middle Third': 0,
        'Top Third': 60,
        'NDA': -100
    }

    const needleAngle = gaugeAngles[gauge];

    const radius = 150;
    const centerX = 300;
    const centerY = 280;

    const getArcPath = (startAngle, endAngle) => {
        const start = {
            x: centerX + radius * Math.cos((startAngle - 90) * (Math.PI / 180)),
            y: centerY + radius * Math.sin((startAngle - 90) * (Math.PI / 180))
        }
        const end = {
            x: centerX + radius * Math.cos((endAngle - 90) * (Math.PI / 180)),
            y: centerY + radius * Math.sin((endAngle - 90) * (Math.PI / 180))
        }
        const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`
    }

    // Calculate the end position of the needle
    const needleEndX = centerX + radius * Math.cos((needleAngle - 90) * (Math.PI / 180));
    const needleEndY = centerY + radius * Math.sin((needleAngle - 90) * (Math.PI / 180));

    // Calculate positions for the arrowhead
    const arrowSize = 15;
    const arrowPoints = [
        { x: needleEndX, y: needleEndY },
        {
            x: needleEndX - arrowSize * Math.cos((needleAngle - 30) * (Math.PI / 180)),
            y: needleEndY - arrowSize * Math.sin((needleAngle - 30) * (Math.PI / 180))
        },
        {
            x: needleEndX - arrowSize * Math.cos((needleAngle - 150) * (Math.PI / 180)),
            y: needleEndY - arrowSize * Math.sin((needleAngle - 150) * (Math.PI / 180))
        }
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='w-full'>
            <svg width={600} viewBox='0 0 600 300'>
                {/* gauge arcs */}
                <path d={getArcPath(180, -45)} fill='none' stroke={gaugeColors['Bottom Third']} strokeWidth={85} />
                <path d={getArcPath(-45, 45)} fill='none' stroke={gaugeColors['Middle Third']} strokeWidth={85} />
                <path d={getArcPath(45, 180)} fill='none' stroke={gaugeColors['Top Third']} strokeWidth={85} />
                {/* labels */}
                <text x={-40} y={250} fill='white' fontSize={12} fontWeight='bold' transform='rotate(-65, 40, 120)'>
                    {gaugeLabels['Bottom Third']}
                </text>
                <text x={300} y={110} fill='white' fontSize={12} fontWeight='bold' textAnchor='middle'>
                    {gaugeLabels['Middle Third']}
                </text>
                <text x={450} y={120} fill='white' fontSize={12} fontWeight='bold' transform='rotate(70, 405, 155)'>
                    {gaugeLabels['Top Third']}
                </text>
                {/* needle */}
                <line
                    x1={300}
                    y1={280}
                    x2={300 + radius * Math.cos((needleAngle - 90) * (Math.PI / 180))}
                    y2={280 + radius * Math.sin((needleAngle - 90) * (Math.PI / 180))}
                    stroke='black'
                    strokeWidth={3}
                />
                <circle cx={300} cy={280} r={15} fill='black' />
                {/* arrowhead */}
                <polygon
                    points={arrowPoints.map(point => `${point.x},${point.y}`).join(' ')}
                    fill='black'
                />
            </svg>
        </div>
    );
}

Gauge.propTypes = {
    gauge: PropTypes.oneOf(['Bottom Third', 'Middle Third', 'Top Third', 'NDA']).isRequired
}

export default Gauge;

