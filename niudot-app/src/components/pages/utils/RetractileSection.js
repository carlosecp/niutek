import React from 'react'
import RetractileFormTemplate from './RetractileFormTemplate'


/* Seccion retractil de una pagina. Toma el estado de la pagina, definido como
un objeto que indexa el estado de cada seccion segun el titulo.*/
export default function RetractileSection({pageState, formTitle, children}){
	const retractionHook = pageState[formTitle]
	const props = {...retractionHook, formTitle, children}

	return <RetractileFormTemplate {...props}/>
}

