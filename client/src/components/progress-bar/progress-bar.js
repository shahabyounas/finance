import React from 'react';
import './progress-bar.scss'

const ProgressBar = () => {

    return (
        <div class="row">
            <div class="bar-container">
                <div class="bar val-a" style={{ flexBasis: '0 0 20%' }}></div>
                <div class="bar val-b" style={{ flexBasis: '0 0 70%' }}></div>
                <div class="bar val-c" style={{ flexBasis: '0 0 10%' }}></div>
            </div>
        </div>
    )
}

export default ProgressBar;