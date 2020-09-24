import React from 'react'

export default function Checkbox({CheckboxContent}) {
    return (
        <div className="input-container input-container-md">
            <div className="std-input rounded">
                <input type="checkbox"/>
                <div className="input-checkbox-content">{`${CheckboxContent}`}</div>
            </div>
        </div>
    )
}
