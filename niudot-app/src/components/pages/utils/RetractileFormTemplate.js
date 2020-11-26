import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

/* Formulario retractil, con estado descentralizado.*/
function RetractileFormTemplate({ retractionHook, formTitle, children }) {
	console.log(retractionHook)

	const [itsRetracted, setItsRetracted] = retractionHook

	function toggleRetraction() {
		setItsRetracted(!itsRetracted)
	}

	return (
		<div className=''>
			<div className='' onClick={toggleRetraction}>
				<FaChevronRight className={` ${itsRetracted || ''}`} />
				<h2>{formTitle}</h2>
			</div>
			{itsRetracted || <>{children}</>}
		</div>
	)
}

export default RetractileFormTemplate
