import * as yup from 'yup'
import ProductoDeCredito from './productoDeCredito'
import cargos from './cargos'

export const navLinks = [{ name: 'Cargos', anchor: '_persona_natural' }]

export type ProductoDeCreditoSearchResult = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: ProductoDeCreditoSearchResult) => ({
	accesor: result.cod_producto,
	description: result.nombre
})

const values = {
	...ProductoDeCredito.values,
	cargos: cargos.values
}
const validations = {
	...ProductoDeCredito.validations,
	cargos: cargos.validations
}

export type ProductoDeCreditoValues = typeof values
export type ProductoDeCreditoValidationSchema = typeof validations

export const initialValues = { values, validations }
