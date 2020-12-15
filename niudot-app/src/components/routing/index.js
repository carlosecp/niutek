import React from 'react'
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
			{ path: 'caja/cancelacion-anticipada', name: 'Cancelación Anticipada' },
			{ path: 'caja/apertura-de-cuenta-de-ahorro-pendiente', name: 'Apertura de Cuenta de Ahorro Pendiente' },
			{ path: 'caja/apertura-certificado-a-plazo-fijo', name: 'Apertura de Certificado a Plazo Fijo' },
			{ path: 'caja/abono-a-prestamo', name: 'Abono a Préstamo' },
			{ path: 'caja/deposito-a-cuenta-de-ahorro', name: 'Depósito a Cuenta de Ahorro' },
			{ path: 'caja/retiro-a-cuenta-de-ahorro', name: 'Retiro a Cuenta de Ahorro' },
		]
	},
	{
		name: 'Clientes',
		icon: <FaUsers />,
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Jurídica' }
		]
	},
	{
		name: 'Ahorros',
		icon: <FaPiggyBank />,
		dropdownOptions: [
			{ path: 'ahorros/ahorros-1', name: 'Ahorros 1' },
			{ path: 'ahorros/ahorros-2', name: 'Ahorros 2' }
		]
	},
	{
		name: 'Reportes',
		icon: <FaChartBar />,
		dropdownOptions: [
			{ path: 'reportes/reportes-1', name: 'Reportes 1' },
			{ path: 'reportes/reportes-2', name: 'Reportes 2' }
		]
	},
	{
		name: 'Cobranza',
		icon: <FaReceipt />,
		dropdownOptions: [
			{ path: 'cobranza/cobranza-1', name: 'Cobranza 1' },
			{ path: 'cobranza/cobranza-2', name: 'Cobranza 2' }
		]
	},
	{
		name: 'Productos',
		icon: <FaChevronCircleDown />,
		dropdownOptions: [
			{ path: 'productos/productos', name: 'Productos' },
		]
	},
	{
		name: 'Crédito',
		icon: <FaCreditCard />,
		dropdownOptions: [
			{ path: 'credito/creditos-1', name: 'Credito 1' },
			{ path: 'credito/creditos-2', name: 'Credito 2' }
		]
	},
	{
		name: 'Cheques',
		icon: <FaMoneyCheck />,
		dropdownOptions: [
			{ path: 'cheques/cheques', name: 'Cheques' },
		]
	},

]

export default pages
