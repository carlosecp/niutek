import React from 'react'

function Credit() {
	return (
		<div className='bg-white-gray'>
			<div className='max-w-3xl mx-auto p-8 text-black-white'>
				<h1 className='text-3xl font-bold'>Crédito</h1>
				<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
				<ul div className='my-4 pl-4 list-disc'>
					<li>
						Definición y configuración personalizada de numerosas variantes de
						un crédito: tasa, plazo, tipo, periodicidad, periodos de gracia,
						método de cobro de intereses, comisiones, depósitos en garantía,
						actividades, moratorios, documentación requerida al cliente,
						productos de crédito, ahorro, actividad económica del acreditador.
					</li>
					<li>
						Control y manejo de préstamos, solicitud, resolución, entrega.
					</li>
					<li>
						Administración del crédito, reestructuración, abonos
						extraordinarios, prórroga.
					</li>
					<li>
						Excendentes: cálculo de la distribución, capitalización parcial de
						excedentes a distribuir, capitalización de excedentes no retirados.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Credit
