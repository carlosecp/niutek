import React from 'react'

function Collections() {
	return (
		<div className='bg-gray-200 dark:bg-gray-cstm-2'>
			<div className='max-w-3xl mx-auto p-8 text-black-white'>
				<h1 className='text-3xl font-bold'>Cobranza</h1>
				<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
				<div className='my-2 mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1'>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
						Consultas o Sociedades de Información Crediticia (Buró de Crédito).
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
						Manejo y control de movimientos, cargos y abonos sobre préstamos.
					</div>
					<div className='p-2 rounded border-2 border-solid col-span-2 sm:col-span-1 text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
						Resolución de crédito. Permite aprobar o denegar en base a
						resolución de comité de crédito.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Collections
