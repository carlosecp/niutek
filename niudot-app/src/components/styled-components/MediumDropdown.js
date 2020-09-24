import React from 'react'
import { FaCaretDown } from 'react-icons/fa';


export default function MediumDropdown({newPlaceholder, createNewLine}) {
    return (
        <div className={`input-container input-container-sm input-container-flex ${createNewLine ? 'input-container-md-nl' : 'input-container-md'}`}>
            <input
                type="text"
                className="std-input rounded-l"
                placeholder={`${newPlaceholder}`}
            />
            <div className="input-btn rounded-r">
                <FaCaretDown/>
            </div>
        </div>
    )
}


