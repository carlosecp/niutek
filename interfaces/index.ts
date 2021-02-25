import type {
	PersonaNaturalValues,
	PersonaNaturalSearchResult
} from '../components/app/pages/clientes/persona_natural/data'

export type GlobalSearchResults = PersonaNaturalSearchResult

export interface GlobalSearchConfig {
	placeholder: string
	url: string
}

export interface TablaOptions {
	bancos: { codigo: number; descripcion: string }[]
	moneda: { codigo: number; descripcion: string }[]
	nacionalidad: { codigo: number; descripcion: string }[]
	sexo: { codigo: number; descripcion: string }[]
	tipo_doc: { codigo: number; descripcion: string }[]
}

export interface DeptosOption {
	cod_depto: number
	nom_depto: string
}

export interface MuniOption {
	cod_muni: number
	nom_municipio: string
}

export interface Alert {
	id: string
	message: string
	type: 'success' | 'warning'
}

export type GlobalValues = PersonaNaturalValues
