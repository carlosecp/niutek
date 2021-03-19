import * as yup from 'yup'

const values = {
	p_cod_gar: 0,
	p_cod_cla: 0,
	p_cod_cat: 0,
	p_marca: '',
	p_modelo: '',
	p_annio: '',
	p_color: '',
	p_motor: '',
	p_chasis: '',
	p_no_serie: '',
	p_valor: 0,
	p_descripcion: ''
}

const validations = {
	p_cod_gar: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_cod_cla: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_cod_cat: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_marca: yup.string().required('Requerido').max(20, 'Caracteres máximos 20'),
	p_modelo: yup
		.string()
		.required('Requerido')
		.max(20, 'Caracteres máximos 100'),
	p_annio: yup.string().required('Requerido').max(10, 'Caracteres máximos 10'),
	p_color: yup.string().required('Requerido').max(20, 'Caracteres máximos 20'),
	p_motor: yup.string().required('Requerido').max(30, 'Caracteres máximos 30'),
	p_chasis: yup.string().required('Requerido').max(30, 'Caracteres máximos 30'),
	p_no_serie: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_valor: yup.number().min(0, 'Valor mínimo 0').required('Requerido'),
	p_descripcion: yup
		.string()
		.required('Requerido')
		.max(200, 'Caracteres máximos 200')
}

export const garantias = { values, validations }
