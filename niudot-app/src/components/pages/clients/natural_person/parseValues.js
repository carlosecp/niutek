export default (values) => {
	if (!values.p_of_negocio_propio) {
		values.p_of_nombre_negocio = ''
	}
	if (!values.p_of_prof_independiente) {
		values.p_of_prof_ejerce = ''
	}
	if (!values.p_of_herencia) {
		values.p_of_de_quien = ''
	}
	if (!values.p_of_inversiones) {
		values.p_of_tipos_inversiones = ''
	}
	if (!values.p_of_prestamo) {
		values.p_of_inst_financiera = ''
	}
	if (!values.p_of_venta_de) {
		values.p_of_descrip_venta_de = ''
	}
	if (!values.p_of_ahorro) {
		values.p_of_aho_inst_financiera = ''
	}
	if (!values.p_of_otros) {
		values.p_of_des_otros = ''
	}
	return values
}
