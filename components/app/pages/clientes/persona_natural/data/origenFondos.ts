import * as yup from 'yup'

const values = {
	p_of_negocio_propio: false,
	p_of_nombre_negocio: '',
	p_of_prof_independiente: false,
	p_of_prof_ejerce: '',
	p_of_herencia: false,
	p_of_de_quien: '',
	p_of_inversiones: false,
	p_of_tipos_inversiones: '',
	p_of_prestamo: false,
	p_of_inst_financiera: '',
	p_of_venta_de: false,
	p_of_descrip_venta_de: '',
	p_of_salario: false,
	p_of_ahorro: false,
	p_of_aho_inst_financiera: '',
	p_of_otros: false,
	p_of_des_otros: ''
}

const validations = {
	p_of_negocio_propio: yup.boolean(),
	p_of_nombre_negocio: yup.string().when('p_of_negocio_propio', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	}),
	p_of_prof_independiente: yup.boolean(),
	p_of_prof_ejerce: yup.string().when('p_of_prof_independiente', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	}),
	p_of_herencia: yup.boolean(),
	p_of_de_quien: yup.string().when('p_of_herencia', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	}),
	p_of_inversiones: yup.boolean(),
	p_of_tipos_inversiones: yup.string().when('p_of_inversiones', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	}),
	p_of_prestamo: yup.boolean(),
	p_of_inst_financiera: yup.string().when('p_of_prestamo', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	}),
	p_of_venta_de: yup.boolean(),
	p_of_descrip_venta_de: yup.string().when('p_of_venta_de', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	}),
	p_of_salario: yup.boolean(),
	p_of_ahorro: yup.boolean(),
	p_of_aho_inst_financiera: yup.string().when('p_of_ahorro', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	}),
	p_of_otros: yup.boolean(),
	p_of_des_otros: yup.string().when('p_of_otros', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	})
}

export const origenFondos = { values, validations }
