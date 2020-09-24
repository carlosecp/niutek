import React, {useState} from 'react'

export default function MediumButton({ titleText, buttonType}) {

    return (
        <button className={`input-container input-container-sm rounded form-btn-${buttonType} btn`}>
            {titleText}
        </button>
    )
}


/**
 * <button
                        className="input-container input-container-sm rounded form-btn-success btn"
                    >
                        Hello World
                    </button>
 */