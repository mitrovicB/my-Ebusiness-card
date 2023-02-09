import React from 'react';
import avatar from '../images/avatar.jpg'

function Info() {
    return (
        <div className='info-container'>
            <img src={avatar} className="info_image" alt="avatar image" />
            <h2>Branka Petković</h2>
            <h3>Frontend developer</h3>
            <h4>Portfolio.site</h4>
            <div className='info_btn_container'>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    );
}

export default Info;