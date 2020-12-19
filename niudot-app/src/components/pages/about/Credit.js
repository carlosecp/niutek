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
				<div className='my-2 mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1'>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Consultas o Sociedades de Información Crediticia (Buró de Crédito).
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Manejo y control de movimientos, cargos y abonos sobre préstamos.
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Resoluación de crédito. Permite aprobar o denegar en base a
						resolución de comité de crédito.
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Productos de crédito, con características particulares según las
						necesidades de la organización.
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Generación automática de asientos hacia la contabidivdad.
					</div>
					<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Cálculo y cobro de comisiones en tres modadivdades: al formadivzar,
						por cuota o de manera diferida.
					</div>
					<div className='p-2 rounded border-2 border-solid col-span-2 sm:col-span-1 text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
						Registro y procesamiento de sodivcitudes de créditos: control de
						documentación a presentar, cargos administrativos, registro de
						pódivzas y de cargos por servicios profesionales. Registro de
						garantías ofrecidas.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Credit
