import React from 'react'


const routes = [
	{
		name: 'Caja',
		icon:'HomeIcon',
		routes: [
			{ path: 'caja/caja-1', name: 'Caja 1' },
			{ path: 'caja/caja-2', name: 'Caja 2' }
		]
	},
	{
		name: 'Clientes',
		icon: 'HomeIcon',
		routes: [
			{
				path: 'clientes/persona-natural',
				name: 'Persona Natural'
			},
			{
				path: 'clientes/persona-juridica',
				name: 'Persona Jurídica'
			}
		]
	},
	{
		name: 'Ahorros',
		icon: 'HomeIcon',
		routes: [
			{
				path: 'ahorros/ahorros-1',
				name: 'Ahorros 1'
			},
			{
				path: 'ahorros/ahorros-2',
				name: 'Ahorros 2'
			}
		]
	},
	{
		name: 'Reportes',
		icon: 'HomeIcon',
		routes: [
			{
				path: 'reportes/reportes-1',
				name: 'Reportes 1'
			},
			{
				path: 'reportes/reportes-2',
				name: 'Reportes 2'
			}
		]
	},
	{
		name: 'Cobranza',
		icon:'HomeIcon',
		routes: [
			{
				path: 'cobranza/cobranza-1',
				name: 'Cobranza 1'
			},
			{
				path: 'cobranza/cobranza-2',
				name: 'Cobranza 2'
			}
		]
	},
	{
		name: 'Productos',
		icon: 'HomeIcon',
		routes: [
			{
				path: 'productos/productos-1',
				name: 'Productos 1'
			},
			{
				path: 'productos/productos-2',
				name: 'Productos 2'
			}
		]
	},
	{
		name: 'Crédito',
		icon: 'HomeIcon',
		routes: [
			{
				path: 'credito/creditos-1',
				name: 'Credito 1'
			},
			{
				path: 'credito/creditos-2',
				name: 'Credito 2'
			}
		]
	}
]

export default routes
