import type {
	PersonaNaturalValues,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
import {
	PersonaJuridicaSearchResult,
	PersonaJuridicaValues
} from '@/data/persona_juridica'
import type {
	ProductosDeAhorroValues,
	ProductosDeAhorroSearchResult
} from '@/data/productos_ahorro'
import type {
	CertificadosPlazoFijoValues,
	CertificadosPlazoFijoSearchResults
} from '@/data/certificados_plazo_fijo'
import type {
	ProductosDeCreditoValues,
	ProductosDeCreditoSearchResult
} from '@/data/productos_credito'
import type {
	ResolucionDeCreditoValues,
	ResolucionDeCreditoSearchResult
} from '@/data/resolucion_credito'
import type {
	SolicitudDeCreditoSearchResult,
	SolicitudDeCreditoValues
} from '@/data/solicitud_credito'
import { FormalizacionDeCreditoValues } from '@/data/formalizacion_credito'
import { GarantiasSearchResult, GarantiasValues } from '@/data/garantias'

export type GlobalSearchResults =
	| PersonaNaturalSearchResult
	| PersonaJuridicaSearchResult
	| ProductosDeAhorroSearchResult
	| CertificadosPlazoFijoSearchResults
	| ProductosDeCreditoSearchResult
	| SolicitudDeCreditoSearchResult
	| FormalizacionDeCreditoValues
	| ResolucionDeCreditoSearchResult
	| GarantiasSearchResult

export interface GlobalSearchConfig {
	placeholder: string
	url: string
}

export interface TablaOptions {
	banco: { codigo: number; descripcion: string }[]
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
	| CertificadosPlazoFijoValues
	| ProductosDeCreditoValues
	| SolicitudDeCreditoValues
	| FormalizacionDeCreditoValues
	| ResolucionDeCreditoValues
	| GarantiasValues
