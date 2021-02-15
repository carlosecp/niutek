import * as yup from 'yup'

export const origenFondosValues = {
	p_of_negocio_propio: true,
	p_of_nombre_negocio: 'Nombre Negocio Propio Prueba',
	p_of_prof_independiente: true,
	p_of_prof_ejerce: 'Profesion Ejerce Prueba',
	p_of_herencia: true,
	p_of_de_quien: 'Herencia de quien Prueba',
	p_of_inversiones: true,
	p_of_tipos_inversiones: 'Tipo Inversiones Prueba',
	p_of_prestamo: true,
	p_of_inst_financiera: 'Institucion Financiera Prueba',
	p_of_venta_de: true,
	p_of_descrip_venta_de: 'Descripcion de Venta Prueba',
	p_of_salario: true,
	p_of_ahorro: true,
	p_of_aho_inst_financiera: 'Institucion de ahorro financiera Prueba',
	p_of_otros: true,
	p_of_des_otros: 'Descripcion Otros',
}

export const origenFondosValidations = {
	p_of_negocio_propio: yup.boolean(),
	p_of_nombre_negocio: yup.string().when('p_of_negocio_propio', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
	p_of_prof_independiente: yup.boolean(),
	p_of_prof_ejerce: yup.string().when('p_of_prof_independiente', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
	p_of_herencia: yup.boolean(),
	p_of_de_quien: yup.string().when('p_of_prof_independiente', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
	p_of_inversiones: yup.boolean(),
	p_of_tipos_inversiones: yup.string().when('p_of_inversiones', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
	p_of_prestamo: yup.boolean(),
	p_of_inst_financiera: yup.string().when('p_of_prestamo', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
	p_of_venta_de: yup.boolean(),
	p_of_descrip_venta_de: yup.string().when('p_of_venta_de', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
	p_of_salario: yup.boolean(),
	p_of_ahorro: yup.boolean(),
	p_of_aho_inst_financiera: yup.string().when('p_of_ahorro', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
	p_of_otros: yup.boolean(),
	p_of_des_otros: yup.string().when('p_of_otros', {
		is: true,
		then: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
		otherwise: yup.string().max(0, 'Valor inválido'),
	}),
}
