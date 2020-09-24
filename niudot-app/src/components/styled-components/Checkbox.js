import React from 'react'

export default function Checkbox({CheckboxContent, createNewLine}) {
    return (
        <div className={`input-container input-container-md ${createNewLine ? 'input-container-md-nl' : 'input-container-md'}`}>
            <div className="std-input rounded">
                <input type="checkbox"className="larger-checkbox"/>
                <div className="input-checkbox-content">{`${CheckboxContent}`}</div>
            </div>
        </div>
    )
}
