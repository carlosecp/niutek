import type { validationsPersonaNatural } from './data/clientes/persona_natural'
export interface SearchConfig {
	title: string
	heading: string
	description: string
	labels: {
		searchbox: string
		button: string
	}
	url: string
}

export interface SearchPersonaNatural {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

export interface SearchPersonaJuridica {
	cod_cliente: number
	nombre: string
	description: string
}

export interface SearchProducto {
	cod_producto: number
	nombre: string
}

export type searchResults =
	| SearchPersonaNatural
	| SearchPersonaJuridica
	| SearchProducto

export type validationSchemas = validationsPersonaNatural
