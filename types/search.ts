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

export interface SearchResPersonaNatural {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

export interface SearchResPersonaJuridica {
	cod_cliente: number
	nombre: string
	description: string
}

export interface SearchResProducto {
	cod_producto: number
	nombre: string
}

export type GlobalSearchResults =
	| SearchResPersonaNatural
	| SearchResPersonaJuridica
	| SearchResProducto
