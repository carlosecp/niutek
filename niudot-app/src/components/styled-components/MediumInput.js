import React from 'react'

export default function MediumInput({ newPlaceholder, createNewLine}) {
    return (
        <div className={`input-container ${createNewLine ? 'input-container-md-nl' : 'input-container-md'}`}>
            <input
                type="text"
                className="std-input rounded"
                placeholder={`${newPlaceholder}`}
            />
        </div>
    )
}
