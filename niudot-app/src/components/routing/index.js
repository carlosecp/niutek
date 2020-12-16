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
			{
				path: 'app/caja/cancelacion-anticipada',
				name: 'Cancelación Anticipada'
			},
			{
				path: 'app/caja/apertura-de-cuenta-de-ahorro-pendiente',
				name: 'Apertura de Cuenta de Ahorro Pendiente'
			},
			{
				path: 'app/caja/apertura-certificado-a-plazo-fijo',
				name: 'Apertura de Certificado a Plazo Fijo'
			},
			{ path: 'app/caja/abono-a-prestamo', name: 'Abono a Préstamo' },
			{
				path: 'app/caja/deposito-a-cuenta-de-ahorro',
				name: 'Depósito a Cuenta de Ahorro'
			},
			{
				path: 'app/caja/retiro-a-cuenta-de-ahorro',
				name: 'Retiro a Cuenta de Ahorro'
			}
		]
	},
	{
		name: 'Clientes',
		icon: <FaUsers />,
		dropdownOptions: [
			{ path: 'app/clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'app/clientes/persona-juridica', name: 'Persona Jurídica' }
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
		dropdownOptions: [{ path: 'app/productos/productos', name: 'Productos' }]
	},
	{
		name: 'Crédito',
		icon: <FaCreditCard />,
		dropdownOptions: [
			{ path: 'app/credito/creditos-1', name: 'Credito 1' },
			{ path: 'app/credito/creditos-2', name: 'Credito 2' }
		]
	},
	{
		name: 'Cheques',
		icon: <FaMoneyCheck />,
		dropdownOptions: [{ path: 'app/cheques/cheques', name: 'Cheques por Imprimir' }]
	}
]

export default pages
