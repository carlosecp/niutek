import * as yup from 'yup'

const values = {
	p_of_donacion: false,
	p_of_nombre_donante: '',
	p_of_herencia: false,
	p_of_de_quien: '',
	p_of_inversiones: false,
	p_of_tipos_inversiones: '',
	p_of_prestamo: false,
	p_of_inst_financiera: '',
	p_of_venta_de: false,
	p_of_descrip_venta_de: '',
	p_of_ing_giro_emp: false,
	p_of_aporte_socios: false,
	p_of_otros: false,
	p_of_des_otros: ''
}

const testingValues = {
	p_of_donacion: true,
	p_of_nombre_donante: 'p_of_nombre_donante',
	p_of_herencia: true,
	p_of_de_quien: 'p_of_de_quien',
	p_of_inversiones: true,
	p_of_tipos_inversiones: 'p_of_tipos_inversiones',
	p_of_prestamo: true,
	p_of_inst_financiera: 'p_of_inst_financiera',
	p_of_venta_de: true,
	p_of_descrip_venta_de: 'p_of_descrip_venta_de',
	p_of_ing_giro_emp: true,
	p_of_aporte_socios: true,
	p_of_otros: true,
	p_of_des_otros: 'p_of_des_otros'
}

const validations = {
	p_of_donacion: yup.boolean(),
	p_of_nombre_donante: yup.string().when('p_of_donacion', {
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
	p_of_ing_giro_emp: yup.boolean(),
	p_of_aporte_socios: yup.boolean(),
	p_of_otros: yup.boolean(),
	p_of_des_otros: yup.string().when('p_of_otros', {
		is: true,
		then: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
		otherwise: yup.string()
	})
}

// export const origenFondos = { values, validations }
export const origenFondos = { values: testingValues, validations }
