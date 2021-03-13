import type {
	PersonaNaturalValues,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
import {
	PersonaJuridicaSearchResult,
	PersonaJuridicaValues
} from '@/data/persona_juridica'
import type {
	ProductosDeCreditoValues,
	ProductosDeCreditoSearchResult
} from '@/data/productos_credito'
import type {
	ProductosDeAhorroValues,
	ProductosDeAhorroSearchResult
} from '@/data/productos_ahorro'
import type {
	ResolucionDeCreditoValues,
	ResolucionDeCreditoSearchResult
} from '@/data/resolucion_credito'
import type {
	SolicitudDeCreditoSearchResult,
	SolicitudDeCreditoValues
} from '@/data/solicitud_credito'
import { FormalizacionDeCreditoValues } from '@/data/formalizacion_credito'

export type GlobalSearchResults =
	| PersonaNaturalSearchResult
	| PersonaJuridicaSearchResult
	| ProductosDeAhorroSearchResult
	| ProductosDeCreditoSearchResult
	| SolicitudDeCreditoSearchResult
	| FormalizacionDeCreditoValues
	| ResolucionDeCreditoSearchResult

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

export type GlobalValues =
	| PersonaNaturalValues
	| PersonaJuridicaValues
	| ProductosDeAhorroValues
	| ProductosDeCreditoValues
	| SolicitudDeCreditoValues
	| FormalizacionDeCreditoValues
	| ResolucionDeCreditoValues
