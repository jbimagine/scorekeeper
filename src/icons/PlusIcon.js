import React from 'react';

const SVG = ({
    style = {},
    fill = '#FFF',
    height = '20',
    width = '20',
    className = '',
    viewBox = '0 0 20 20'
}) => (
    <svg 
        width={width} 
        height={height} 
        viewBox={viewBox} 
        fill={ fill } 
        xmlns="http://www.w3.org/2000/svg">
    <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M10.9061 1C10.9061 0.447715 10.4584 0 9.90607 0C9.35378 0 8.90607 0.447715 8.90607 1V9H1C0.447715 9 0 9.44772 0 10C0 10.5523 0.447715 11 1 11H8.90607V19C8.90607 19.5523 9.35378 20 9.90607 20C10.4584 20 10.9061 19.5523 10.9061 19V11H18.2964C18.8487 11 19.2964 10.5523 19.2964 10C19.2964 9.44772 18.8487 9 18.2964 9H10.9061V1Z" 
        fill={fill}
        />
    </svg>
);

export default SVG;