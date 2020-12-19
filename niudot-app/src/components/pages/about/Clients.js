import React from 'react'

function Clients() {
	return (
		<div className='bg-gray-200 dark:bg-gray-cstm-2'>
			<div className='max-w-3xl mx-auto p-8 text-black-white'>
				<h1 className='text-3xl font-bold'>Clientes</h1>
				<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
				<ul div className='my-4 pl-4 list-disc'>
					<li>
						Mantenimiento de información relevante de cada sociado o cliente de
						la organización, tales come: datos personales, datos familiares y
						laborales. Registro electrónico de fotografía y firma de cada
						asociado o cliente.
					</li>
					<li>
						Control del capital social: aporte acumulado, aporte mensual general
						o individual, transacciones de capital.
					</li>
					<li>Asignar becas a sus parientes.</li>
					<li>
						Excendentes: cálculo de la distribución, capitalización parcial de
						excedentes a distribuir, capitalización de excedentes no retirados.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Clients
