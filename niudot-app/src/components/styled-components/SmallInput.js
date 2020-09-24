import React from 'react'

export default function SmallInput({newPlaceholder, createNewLine}) {
    return (
        <div className={`input-container input-container-sm ${createNewLine ? 'input-container-sm-nl' : 'input-container-sm'}`}>
            <input type="text" className="std-input rounded" placeholder={`${newPlaceholder}`} />
        </div>
    )
}
