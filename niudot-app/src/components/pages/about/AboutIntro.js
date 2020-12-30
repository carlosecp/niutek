import React from 'react'

function AboutIntro() {
	return (
		<div className='bg-blue-700 dark:bg-blue-500'>
			<div className='max-w-3xl mx-auto p-8 text-white'>
				<h1 className='mt-4 text-3xl font-bold sm:mt-0'>¿Qué es niudot?</h1>
				<div className='rounded-full bg-white-gray w-4/12 sm:w-full h-1 mt-4'></div>
				<div className='my-4 flex flex-col gap-4'>
					<p>
						<b className='underline'>niudot</b> es una plataforma asequible,
						innovadora e intregrada, diseñada para empresas en crecimiento,
						cooperativas, financieras y Pymes.
					</p>
					<p>
						Automatizará y administrará las operaciones comerciales de
						contabilidad-finanzas, crédito, ahorro, ventas-compras, operaciones,
						inventario, informes e inteligencia de negocios.
					</p>
				</div>
				<aside>
					<b className='underline'>niudot</b>, permite a cualquier negocio
					impulsar su crecimiento, unificando todos sus procesos en una sola
					aplicación.
				</aside>
				<div className='mt-4 grid gap-4 grid-cols-2 sm:grid-cols-1'>
					<img
						src={require('../../../assets/images/image_1.svg')}
						alt='sistema_responsivo'
						className='block col-span-1'
					/>
					<div className='flex items-center sm:block'>
						<p>
							<b className='underline'>niudot</b> ofrece un sistema responsivo a
							cualquier tipo de pantalla, permitiendo a los usuarios accesar a
							la aplicación desde cualquier dispositivo y en cualquier momento.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutIntro
