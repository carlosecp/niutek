import React from 'react'

function Inventory() {
	return (
		<div className='bg-gray-200 dark:bg-gray-cstm-2'>
			<div className='max-w-3xl mx-auto p-8 text-black-white'>
				<h1 className='text-3xl font-bold'>Inventario</h1>
				<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
				<div className='grid grid-cols-2 sm:grid-cols-1'>
					<ul div className='my-4 pl-4 list-disc'>
						<li>Catálogo de productos</li>
						<li>Control de productos por bodega</li>
						<li>Mantenimiento de precios por producto</li>
						<li>Generación de cotizaciones a proveedores</li>
						<li>Registro de requisas</li>
						<li>Registro de toma física de inventario en línea</li>
						<li>Comparación toma física con saldos de inventario</li>
						<li>Registro de ajuste de inventario</li>
						<li>Generación automática de asientos hacia la Contabilidad</li>
					</ul>
					<img
						src={require('../../../assets/images/image_3.svg')}
						alt='inventory'
					/>
				</div>
			</div>
		</div>
	)
}

export default Inventory
