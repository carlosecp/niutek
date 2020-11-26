import React, {useState} from 'react'
import RetractileFormTemplate from './RetractileFormTemplate'

export default function RetractileForm({formTitle, children}){
	const retractionHook = useState(true)
	return RetractileFormTemplate({retractionHook, formTitle, children})
}
