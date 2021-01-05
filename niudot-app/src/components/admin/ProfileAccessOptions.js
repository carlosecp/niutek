import React from 'react'
import { Checkbox } from '../pages/utils/forms'

const ProfileAccessOptions = () => {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-1 gap-4'>
			<Register />
			<Clients />
			<Savings />
			<Products />
			<Credit />
			<Checks />
		</div>
	)
}

const Register = () => {
	return (
		<div>
			<h2>Caja</h2>
			<div className='form-grid-layout'>
				<Checkbox
					name='register_anticipated_cancellation'
					description='Cancelación Anticipada'
					size='lg'
				/>
				<Checkbox
					name='register_saving_account'
					description='Apertura de Cuenta de Ahorro Pendiente'
					size='lg'
				/>
				<Checkbox
					name='register_fixed_term_certificate'
					description='Apertura de Certificado a Plazo Fijo'
					size='lg'
				/>
				<Checkbox
					name='register_loan_payment'
					description='Abono a Préstamo'
					size='lg'
				/>
				<Checkbox
					name='register_deposit'
					description='Depósito a Cuenta de Ahorro'
					size='lg'
				/>
				<Checkbox
					name='register_withdrawal'
					description='Retiro a Cuenta de Ahorro'
					size='lg'
				/>
			</div>
		</div>
	)
}

const Clients = () => {
	return (
		<div>
			<h2>Clientes</h2>
			<div className='form-grid-layout'>
				<Checkbox
					name='clients_natural_person'
					description='Persona Natural'
					size='lg'
				/>
				<Checkbox
					name='clients_legal_person'
					description='Persona Jurídica'
					size='lg'
				/>
			</div>
		</div>
	)
}

const Savings = () => {
	return (
		<div>
			<h2>Ahorros</h2>
			<div className='form-grid-layout'>
				<Checkbox
					name='savings_account_opening'
					description='Apertura de Cuenta'
					size='lg'
				/>
				<Checkbox
					name='savings_assignment_of_payment_order_stubs'
					description='Asignación de Talonario'
					size='lg'
				/>
				<Checkbox
					name='savings_account_cancellation'
					description='Cancelación de Cuenta de Ahorro'
					size='lg'
				/>
				<Checkbox
					name='savings_fixed_term_deposit_opening'
					description='Apertura de Depósitos a Plazo Fijo'
					size='lg'
				/>
				<Checkbox
					name='savings_early_cancellation_fixed_term_deposit'
					description='Cancelación Anticipada'
					size='lg'
				/>
			</div>
		</div>
	)
}

const Products = () => {
	return (
		<div>
			<h2>Productos</h2>
			<div className='form-grid-layout'>
				<Checkbox name='products' description='Productos' size='lg' />
			</div>
		</div>
	)
}

const Credit = () => {
	return (
		<div>
			<h2>Crédito</h2>
			<div className='form-grid-layout'>
				<Checkbox name='credit_products' description='Productos' size='lg' />
				<Checkbox name='credit_resolution' description='Resolución' size='lg' />
				<Checkbox name='credit_request' description='Solicitud' size='lg' />
			</div>
		</div>
	)
}

const Checks = () => {
	return (
		<div>
			<h2>Cheques</h2>
			<div className='form-grid-layout'>
				<Checkbox name='checks_to_print' description='Por Imprimir' size='lg' />
				<Checkbox
					name='checks_to_deliver'
					description='Por Entregar'
					size='lg'
				/>
				<Checkbox
					name='checks_to_be_reconciled'
					description='Por Conciliar'
					size='lg'
				/>
				<Checkbox
					name='checks_reconciled'
					description='Conciliados'
					size='lg'
				/>
				<Checkbox name='checks_voided' description='Anulados' size='lg' />
			</div>
		</div>
	)
}

const Inventory = () => {
	return (
		<div>
			<h2>Inventario</h2>
			<div className='form-grid-layout'>
				<Checkbox name='inventory_items' description='Artículos' size='lg' />
				<Checkbox name='inventory_purchase' description='Compras' size='lg' />
				<Checkbox name='inventory_products' description='Productos' size='lg' />
				<Checkbox
					name='inventory_requisitions'
					description='Requisas'
					size='lg'
				/>
				<Checkbox
					name='inventory_physical_take'
					description='Toma Física'
					size='lg'
				/>
				<Checkbox
					name='inventory_billing'
					description='Facturación'
					size='lg'
				/>
				<Checkbox
					name='inventory_invoice_cancel'
					description='Anula Factura'
					size='lg'
				/>
				<Checkbox name='inventory_reports' description='Reportes' size='lg' />
			</div>
		</div>
	)
}

export default ProfileAccessOptions
