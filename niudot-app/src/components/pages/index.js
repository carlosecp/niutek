// React to render the icons and components
import React from 'react'
// Icons
import {
	FaCashRegister,
	FaUsers,
	FaPiggyBank,
	FaChartBar,
	FaReceipt,
	FaChevronCircleDown,
	FaCreditCard,
	FaMoneyCheck
} from 'react-icons/fa/index'

const pages = [
	{
		name: 'Caja',
		icon: <FaCashRegister />,
		dropdownOptions: [
			{
				path: 'app/register/anticipated-cancellation',
				name: 'Cancelación Anticipada'
			},
			{
				path: 'app/register/saving-account',
				name: 'Apertura de Cuenta de Ahorro Pendiente'
			},
			{
				path: 'app/register/fixed-term-certificate',
				name: 'Apertura de Certificado a Plazo Fijo'
			},
			{
				path: 'app/register/loan-payment',
				name: 'Abono a Préstamo'
			},
			{
				path: 'app/register/deposit',
				name: 'Depósito a Cuenta de Ahorro'
			},
			{
				path: 'app/register/withdrawal',
				name: 'Retiro a Cuenta de Ahorro'
			}
		]
	},
	{
		name: 'Clientes',
		icon: <FaUsers />,
		dropdownOptions: [
			{
				path: 'app/clients/natural-person',
				name: 'Persona Natural'
			},
			{
				path: 'app/clients/legal-person',
				name: 'Persona Jurídica'
			}
		]
	},
	{
		name: 'Ahorros',
		icon: <FaPiggyBank />,
		dropdownOptions: [
			{ path: 'app/ahorros/ahorros-1', name: 'Ahorros 1' },
			{ path: 'app/ahorros/ahorros-2', name: 'Ahorros 2' }
		]
	},
	{
		name: 'Reportes',
		icon: <FaChartBar />,
		dropdownOptions: [
			{ path: 'app/reportes/reportes-1', name: 'Reportes 1' },
			{ path: 'app/reportes/reportes-2', name: 'Reportes 2' }
		]
	},
	{
		name: 'Cobranza',
		icon: <FaReceipt />,
		dropdownOptions: [
			{ path: 'app/cobranza/cobranza-1', name: 'Cobranza 1' },
			{ path: 'app/cobranza/cobranza-2', name: 'Cobranza 2' }
		]
	},
	{
		name: 'Productos',
		icon: <FaChevronCircleDown />,
		dropdownOptions: [{ path: 'app/products', name: 'Productos' }]
	},
	{
		name: 'Crédito',
		icon: <FaCreditCard />,
		dropdownOptions: [
			{
				path: 'app/credit/products',
				name: 'Productos'
			},
			{
				path: 'app/credit/resolution',
				name: 'Resolución'
			},
			{
				path: 'app/credit/request',
				name: 'Resolución'
			}
		]
	},
	{
		name: 'Cheques',
		icon: <FaMoneyCheck />,
		dropdownOptions: [
			{
				path: 'app/checks/print',
				name: 'Por Imprimir'
			},
			{
				path: 'app/checks/deliver',
				name: 'Por Entregar'
			},
			{
				path: 'app/checks/not-reconciled',
				name: 'Por Conciliar'
			},
			{
				path: 'app/checks/reconciled',
				name: 'Conciliados'
			},
			{
				path: 'app/checks/voided',
				name: 'Anulados'
			}
		]
	}
]

export default pages
