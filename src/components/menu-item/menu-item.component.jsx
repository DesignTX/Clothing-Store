import React from 'react';


//Destructured by {title} which is equal to props.title
import MenuItem = ({ title }) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;