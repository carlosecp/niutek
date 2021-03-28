import * as yup from 'yup'

const values = {
	p_profesion_oficio: '',
	p_ocupacion_puesto: '',
	p_nombre_empresa: '',
	p_actividad_empresa: '',
	p_tel_empresa: '',
	p_email_empresa: '',
	p_ingreso_anual: (0).toFixed(2)
}

const testingValues = {
	p_profesion_oficio: 'p_profesion_oficio',
	p_ocupacion_puesto: 'p_ocupacion_puesto',
	p_nombre_empresa: 'p_nombre_empresa',
	p_actividad_empresa: 'p_actividad_empresa',
	p_tel_empresa: 'p_tel_empresa',
	p_email_empresa: 'p_email_empresa',
	p_ingreso_anual: (0).toFixed(2)
}

const validations = {
	p_profesion_oficio: yup
		.string()
		.required('Requerido')
		.max(50, 'Caracteres máximos 50'),
	p_ocupacion_puesto: yup
		.string()
		.required('Requerido')
		.max(50, 'Caracteres máximos 50'),
	p_nombre_empresa: yup
		.string()
		.required('Requerido')
		.max(50, 'Caracteres máximos 50'),
	p_actividad_empresa: yup
		.string()
		.required('Requerido')
		.max(50, 'Caracteres máximos 50'),
	p_tel_empresa: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_email_empresa: yup
		.string()
		.email('Corre Electrónico Inválido')
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_ingreso_anual: yup.number().min(0, 'Valor mínimo 0').required('Requerido')
}

// export const datosProfesionales = { values, validations }
export const datosProfesionales = { values: testingValues, validations }
