import React from 'react'
import { FaChevronRight } from 'react-icons/fa'


/* Formulario retractil, con estado descentralizado.*/
function RetractileFormTemplate({retractionHook, formTitle, children }) {
	const [itsRetracted, setItsRetracted] = retractionHook

	function toggleRetraction() {
		setItsRetracted(!itsRetracted)
	}

	return (
		<div className='form-retractile'>
			<div
				className='form-title-container form-title-chevron form-retractile-title'
				onClick={toggleRetraction}
			>
				<FaChevronRight
					className={`form-retractile-chevron ${
						itsRetracted || 'form-active'
					}`}
				/>
				<h2>{formTitle}</h2>
			</div>
			{itsRetracted || <>{children}</>}
		</div>
	)
}

export default RetractileFormTemplate
