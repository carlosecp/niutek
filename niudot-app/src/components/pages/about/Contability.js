import React from 'react'

function Contability() {
	return (
		<div className='bg-blue-700 dark:bg-blue-500'>
			<div className='max-w-3xl mx-auto p-8 text-white'>
				<h1 className='text-3xl font-bold'>Contabilidad</h1>
				<div className='rounded-full bg-white-gray w-4/12 sm:w-full h-1 mt-4'></div>
				<div className='grid grid-cols-2 sm:grid-cols-1'>
					<ul div className='my-4 pl-4 list-disc flex flex-col justify-center'>
						<li>Catálogo de cuentas con gran versatilidad.</li>
						<li>
							Principales reportes contables: estado de resultados, balance,
							balanza, mayor, diario, etc.
						</li>
						<li>Presupuestos de ingresos y/o egresos, balance.</li>
						<li>Cierre Mensual.</li>
						<li>Cierre de ejericico.</li>
					</ul>
					<img
						src={require('../../../assets/images/image_2.svg')}
						alt='contabilidad'
					/>
				</div>
			</div>
		</div>
	)
}

export default Contability
