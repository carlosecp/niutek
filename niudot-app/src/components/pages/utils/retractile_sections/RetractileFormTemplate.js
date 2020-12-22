import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

/* Formulario retractil, con estado descentralizado.*/
function RetractileFormTemplate({
	indent = true,
	retractionHook,
	formTitle,
	children
}) {
	const [itsRetracted, setItsRetracted] = retractionHook

	function toggleRetraction() {
		setItsRetracted(!itsRetracted)
	}

	return (
		<div className='mt-4 flex flex-col'>
			<div className='flex items-center' onClick={toggleRetraction}>
				<FaChevronRight
					className={`text-black dark:text-white fill-current relative mr-2 ${
						itsRetracted || 'rotate-90'
					} transform transition cursor-pointer`}
					style={{ bottom: '2px' }}
				/>
				<h2 className='text-black-white font-bold text-xl cursor-pointer'>
					{formTitle}
				</h2>
			</div>
			{itsRetracted || (
				<div className={`${indent && 'ml-4'} sm:ml-0`}>{children}</div>
			)}
		</div>
	)
}

export default RetractileFormTemplate
