import React from 'react'

function Savings() {
	return (
		<div className='bg-blue-500 dark:bg-blue-700'>
			<div className='max-w-3xl mx-auto p-8 text-white'>
				<h1 className='text-3xl font-bold'>Nómina</h1>
				<div className='rounded-full bg-white-gray w-4/12 sm:w-full h-1 mt-4'></div>
				<ul
					div
					className='my-4 pl-4 list-disc grid grid-cols-2 sm:grid-cols-1 gap-2 gap-x-8'
				>
					<li>Perfil del empleado.</li>
					<li>Configura tipos de ingreso y deducciones por empleado.</li>
					<li>Configura tipos de nómina (semanal, quincenal y mensual).</li>
					<li>Crea nueva nómina.</li>
					<li>Registra ingresos y deducciones por empleado.</li>
					<li>Ahorro ligado al cŕedito.</li>
					<li>Calcula nómina.</li>
					<li>Control de vacaciones.</li>
					<li>Distribución de departamentos por centro de costo.</li>
					<li>Reporte de nómina.</li>
					<li>Reporte de colillas de pago.</li>
					<li>Reporte de ingresos y deducciones de nómina.</li>
				</ul>
			</div>
		</div>
	)
}

export default Savings
