import React from 'react'

export default function SmallMediumButton({buttonText, createNewLine}) {
    return (
        <button className={`input-container input-container-md-sm rounded form-btn-primary btn ${createNewLine ? 'input-container-md-sm-nl' : 'input-container-md-sm'}`}>
					{buttonText}
		</button>
    )
}