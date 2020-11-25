import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import RetractileFormTemplate from './RetractileFormTemplate'


function RetractileForm({ formTitle, children }) {
	const retractionHook = useState(true)
	return RetractileFormTemplate(retractionHook, formTitle, children)
}
export default RetractileForm
