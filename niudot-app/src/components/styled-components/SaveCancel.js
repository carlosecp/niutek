import React from 'react'
import MediumButton from './MediumButton'

export default function SaveCancel() {
    return (
        <>
            <MediumButton titleText="Guardar" buttonType="success"/>
            <MediumButton titleText="Cancelar" buttonType="alert"/>
        </>
    )
}
