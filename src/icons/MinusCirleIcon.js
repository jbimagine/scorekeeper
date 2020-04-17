import React from 'react';

const SVG = ({
    style = {},
    fill = 'none',
    height = '38',
    width = '38',
    className = '',
    viewBox = '0 0 38 38'
}) => (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            style={style}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M34.9078 18.5714C34.9078 28.3469 27.2702 36.2143 17.9182 36.2143C8.56613 36.2143 0.928571 28.3469 0.928571 18.5714C0.928571 8.79593 8.56613 0.928571 17.9182 0.928571C27.2702 0.928571 34.9078 8.79593 34.9078 18.5714Z"
                stroke="white"
                strokeWidth="1.85714"
            />
            <line
                x1="9.88768"
                y1="19.0714"
                x2="25.9487"
                y2="19.0714"
                stroke="white"
                strokeWidth="1.85714"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );

export default SVG;
