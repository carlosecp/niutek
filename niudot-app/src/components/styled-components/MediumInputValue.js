import React from 'react'

export default function MediumInputValue() {
    return (
        <div className="input-container input-container-md alt-input-container">
            Input Field
            <div className="input-container-flex alt-input-container">
                <div className="alt-input rounded-l">Input Value</div>
                <div className="input-btn rounded-r">
                    <i className="fas fa-chevron-down icon"></i>
                </div>
            </div>
        </div>
    )
}
