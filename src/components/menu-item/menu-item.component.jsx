import React from 'react';

import './menu-item.styles.scss';

//Destructured by {title} which is equal to props.title
const MenuItem = ({ title, imageUrl, size }) => (
    //react gives extra html mark up element called style, allows to dynamically create styles on component
    <div className={`${size} menu-item`}>
        <div 
            className='background-image'  
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;