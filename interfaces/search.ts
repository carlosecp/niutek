export interface SearchConfig {
	placeholder: string
	url: string
}

export type PersonaNaturalResult = {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

export type SearchResults = PersonaNaturalResult
