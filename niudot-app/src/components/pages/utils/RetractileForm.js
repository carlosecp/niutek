import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

function RetractileForm({ formTitle, children }) {
	const [itsRetracted, setItsRetracted] = useState(true)

	function toggleRetraction() {
		setItsRetracted(!itsRetracted)
	}

	return (
		<div className='form form-retractile'>
			<div
				className='form-title-container form-title-chevron'
				onClick={toggleRetraction}
			>
				<FaChevronRight
					className={`form-retractile-chevron ${
						itsRetracted && 'form-active'
					}`}
				/>
				<h2>{formTitle}</h2>
			</div>
			{itsRetracted && <>{children}</>}
		</div>
	)
}

export default RetractileForm
