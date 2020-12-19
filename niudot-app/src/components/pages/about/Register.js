import React from 'react'

function Register() {
	return (
		<div className='bg-white-gray'>
			<div className='max-w-3xl mx-auto p-8 text-black-white'>
				<h1 className='text-3xl font-bold'>Caja</h1>
				<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
				<ul div className='my-4 pl-4 list-disc'>
					<li>Generar asientos automáticos por caja y tipo de transacción.</li>
					<li>Amortizaciones parciales o extraordinarias.</li>
					<li>Pagos de certificados y cupones de intereses.</li>
					<li>Generación automática de asientos hacia la Contabilidad.</li>
					<li>Tipificación de movimientos.</li>
					<li>
						Emisión de recibos, con psibilidad de reimpresión y reversión.
					</li>
					<li>
						Registrar y aplicar pago de planilla para instituciones externas.
					</li>
					<li>
						Registro de despliegue de mensajes emergentes por asociado o por
						cliente.
					</li>
					<li>
						Actualización de saldos de cuentas de ahorro por depósitos o
						retiros. Pago o acreditación de intereses.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Register
