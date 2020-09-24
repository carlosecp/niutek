import React from 'react'

export default function LargeInput({ newPlaceholder, createNewLine}) {
    return (
        <div className={`input-container ${createNewLine ? 'input-container-lg-nl' : 'input-container-lg'}`}>
            <input
                type="text"
                className="std-input rounded"
                placeholder={`${newPlaceholder}`}
            />
        </div>
    )
}
