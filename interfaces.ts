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

export type searchResults = SearchPersonaNatural | SearchPersonaJuridica
