import React from 'react'

function Checks() {
	return (
		<div className='bg-white-gray'>
			<div className='max-w-3xl mx-auto p-8 text-black-white'>
				<h1 className='text-3xl font-bold'>Cheques</h1>
				<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
				<div className='my-2 mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1'>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Registro de nuevo cheque emitido
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Modificación o consulta de datos de un cheque
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Registro de cheques entregados
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Informe en vista previa o impreso de los entregados o no entregados
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Conciliación bancaria
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Búsqueda de un determinado cheque según diferentes criterios
					</div>
					<div className='p-2 rounded border-2 border-solid col-span-2 sm:col-span-1 text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Reporte de cheques emitidos, entregados y no entregados, y Calcula
						nómina conciliados
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checks
