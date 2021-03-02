import React from 'react';

import './menu-item.styles.scss';

//Destructured by {title} which is equal to props.title
const MenuItem = ({ title, imageUrl }) => (
    //javascript template string, allows to dynamically create styles on component
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;