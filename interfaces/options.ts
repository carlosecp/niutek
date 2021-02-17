export interface OptionsPersonaNatural {
	dep: { cod_depto: number; nom_depto: string }[]
	p_cod_nac: { codigo: number; descripcion: string }[]
	p_moneda: { codigo: number; descripcion: string }[]
	p_sexo: { codigo: number; descripcion: string }[]
	p_tipo_doc: { codigo: number; descripcion: string }[]
	pct_cod_banco: { codigo: number; descripcion: string }[]
}
