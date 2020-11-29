import React , {useContext} from 'react'
import {PageContext} from '../../../context/sections/SectionsContext'
import RetractileFormTemplate from './RetractileFormTemplate'


/* Seccion retractil de una pagina. Toma el estado de la pagina, definido como
un objeto que indexa el estado de cada seccion segun el titulo.*/
export default function RetractileSection({formTitle, children}){
	const {sections} = useContext(PageContext) 
	const retractionHook = sections[formTitle]

	const props = {...retractionHook, formTitle, children}

	return <RetractileFormTemplate {...props}/>
}

