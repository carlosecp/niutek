import * as yup from 'yup'

export const refSchema = {
	pac_nombre_accionista: '',
	pac_tipo_doc: 0,
	pac_num_doc: '',
	pac_porcentaje: 0
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const testingValues = [
	{
		pac_nombre_accionista: 'pac_nombre_accionista 0',
		pac_tipo_doc: 0,
		pac_num_doc: 'pac_num_doc 0',
		pac_porcentaje: 0
	},
	{
		pac_nombre_accionista: 'pac_nombre_accionista 1',
		pac_tipo_doc: 0,
		pac_num_doc: 'pac_num_doc 1',
		pac_porcentaje: 0
	}
]

const validations = yup.array().of(
	yup.object().shape({
		pac_nombre_accionista: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		pac_tipo_doc: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
		pac_num_doc: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido'),
		pac_porcentaje: yup
			.number()
			.min(0, 'Valor mínimo 0')
			.max(100, 'Valor máximo 100')
			.required('Requerido')
	})
)

// export const accionistas = { values, validations }
export const accionistas = { values: testingValues, validations }
