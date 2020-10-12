import * as Yup from 'yup'

function GenerateYupString(minLength = 10, required = true) {
	const schema = Yup.string().min(minLength, `Minimo ${minLength} caracteres`)
	return required ? schema.required('Requerido') : schema
}

function GenerateYupNumber(
	float = false,
	minLength = 0,
	maxLength = 100,
	required = true
) {
	const schema = float
		? Yup.number().typeError('Valor numérico')
		: Yup.number()
				.integer('Valor entero')
				.min(minLength, `Minimo ${minLength}`)
				.max(maxLength, `Máximo ${maxLength}`)
				.typeError('Valor numérico')
	return required ? schema.required('Requerido') : schema
}

function GenerateYupBoolean() {
	return Yup.boolean().required('Requerido')
}

function GenerateYupDropdown() {
	return Yup.string().required('Requerido')
}

export {
	GenerateYupString,
	GenerateYupNumber,
	GenerateYupBoolean,
	GenerateYupDropdown
}
