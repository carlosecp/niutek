import React from 'react'
import { Grid } from 'react-bootstrap-icons'
import { FaChevronRight } from 'react-icons/fa'

/* Formulario retractil, con estado descentralizado.*/
function RetractileFormTemplate({ retractionHook, formTitle, children }) {
	console.log(retractionHook)

	const [itsRetracted, setItsRetracted] = retractionHook

	function toggleRetraction() {
		setItsRetracted(!itsRetracted)
	}

	return (
		<div className='' >
			<div className='flex items-center' onClick={toggleRetraction}>
				<FaChevronRight className={` ${itsRetracted || ''}`} />
				<h2 className='tw-header text-xl tw-header-secondary'>{formTitle}</h2>
			</div>
			{itsRetracted || <>{children}</>}
		</div>
	)
}

export default RetractileFormTemplate
