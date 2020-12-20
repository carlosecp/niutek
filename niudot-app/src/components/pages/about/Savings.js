import React from 'react'

function Savings() {
	return (
		<div className='bg-blue-700 dark:bg-blue-500'>
			<div className='max-w-3xl mx-auto p-8 text-white'>
				<h1 className='text-3xl font-bold'>Ahorro</h1>
				<div className='rounded-full bg-white-gray w-4/12 sm:w-full h-1 mt-4'></div>
				<ul div className='my-4 pl-4 list-disc'>
					<li>
						Permite definir diferentes productos de ahorro, con características
						particulares según las necesidades de la organización tanto en
						córdobas como en dólares.
					</li>
					<li>
						Las tasas de interés son configurables para cuentas de ahorro y para
						certificados a plazo dependiendo de su plazo y periodicidad de pago
						de intereses.
					</li>
					<li>Presupuestos de ingresos y/o egresos, balance.</li>
					<li>Cierre Mensual.</li>
					<li>Cierre de ejericico.</li>
					<li>Ahorro ligado al cŕedito.</li>
					<li>Control de movimientos sobre cuentas de ahorro.</li>
					<li>Estado de cuenta.</li>
					<li>
						Mantenimiento y control de las diferentes cuentas de ahorros de cada
						asociado o cliente: saldos, movimientos, restricciones de
						movimientos y bloqueos totales o parciales de saldos. Además permite
						la asignación de tasas preferenciales.
					</li>
					<li>
						Generar asientos automáticos de acumulación periódica de gastos
						financieros (intereses).
					</li>
					<li>
						Generar asientos automáticos de ajuste por diferencial cambiario
						sobre saldos e intereses en captaciones con mantenimiento de valor.
					</li>
					<li>Generación automática de asientos hcia la Contabilidad.</li>
				</ul>
			</div>
		</div>
	)
}

export default Savings
