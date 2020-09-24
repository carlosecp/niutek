import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function SearchInput({newPlaceholder, createNewLine}) {
    return (
        <div className="form-container">
            <div className={`input-container input-container-md input-container-flex ${createNewLine ? 'input-container-md-nl' : 'input-container-md'}`}>
                <input
                    type="text"
                    className="std-input rounded-l"
                    placeholder={`${newPlaceholder}`}
                />
                <div className="input-btn rounded-r">
                    <FaSearch />
                </div>
            </div>
        </div>
    )
}
