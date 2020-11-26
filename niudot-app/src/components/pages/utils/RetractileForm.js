import React, { useState } from 'react'
import RetractileFormTemplate from './RetractileFormTemplate'

function RetractileForm({ formTitle, children }) {
	const retractionHook = useState(true)
	//return RetractileFormTemplate(retractionHook, formTitle, children)
	return <>{children}</>
}
export default RetractileForm
