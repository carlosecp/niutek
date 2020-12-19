import React from 'react'

function Billing() {
	return (
		<div className='bg-blue-700 dark:bg-blue-500'>
			<div className='max-w-3xl mx-auto p-8 text-white'>
				<h1 className='text-3xl font-bold'>Facturazión</h1>
				<div className='rounded-full bg-white-gray w-4/12 sm:w-full h-1 mt-4'></div>
				<div className='my-2 mt-4 grid grid-cols-2 gap-6 sm:grid-cols-1'>
					<div className='flex flex-col gap-2'>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Registro de facturas por cliente, de contado y crédito
						</div>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Configuración de bonificación por producto
						</div>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Control de despacho de facturas
						</div>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Registro de devoluciones
						</div>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Anulación de facturas
						</div>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Reporte de facturas
						</div>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Reporte de ventas por producto
						</div>
						<div className='p-2 rounded border-2 border-solid text-white bg-blue-600 border-blue-800 dark:bg-blue-600'>
							Generación automática de asientos hacia la Contabilidad
						</div>
					</div>
					<img
						src={require('../../../assets/images/image_7.svg')}
						alt='billing'
						className='sm:mt-2 my-auto'
					/>
				</div>
			</div>
		</div>
	)
}

export default Billing
