import React from 'react'

function Certificates() {
	return (
		<div className='bg-gray-200 dark:bg-gray-cstm-2'>
			<div className='max-w-3xl mx-auto p-8 text-black-white'>
				<h1 className='text-3xl font-bold'>Certificados</h1>
				<p className='text-xl font-bold'>Plazo Fijo</p>
				<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
				<ul div className='my-4 pl-4 list-disc'>
					<li>
						Mantenimiento y control de certificados de depósito a plazo:
						generación automática de cupones de intereses, redención y
						renovación de certificados.
					</li>
					<li>
						Registro de beneficiarios y autorización por certificado, incluyendo
						el registro electrónico de fotografías y firmas.
					</li>
					<li>
						Generar asientos automáticos de acumulación periódica de gastos
						financieros (intereses).
					</li>
					<li>
						Generar asientos automáticos de ajuste por diferencial cambiario
						sobre saldos e intereses en captaciones con mantenimiento del valor.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Certificates
