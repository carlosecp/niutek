import * as yup from 'yup'

const values = {
	p_profesion_oficio: 'Profesion Prueba',
	p_ocupacion_puesto: 'Puesto Prueba',
	p_nombre_empresa: 'Nombre Empresa Prueba',
	p_actividad_empresa: 'Profesion Prueba',
	p_tel_empresa: 'Telefono Empresa Prueba',
	p_email_empresa: 'corre@electronico.com',
	p_ingreso_anual: (69).toFixed(2),
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
	p_ingreso_anual: yup
		.number()
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
}

export default { values, validations }
