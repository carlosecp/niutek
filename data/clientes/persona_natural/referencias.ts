import * as yup from 'yup'

const referencias_comerciales = [
	{
		prc_nombre_entidad: 'Test Nombre Entidad 1',
		prc_persona_contacto: 'Test Persona Contacto 1',
		prc_direccion: 'Test Direccion 1',
		prc_annios_con_entidad: 4,
		prc_telefono: '99225500',
	},
	{
		prc_nombre_entidad: 'Test Nombre Entidad 2',
		prc_persona_contacto: 'Test Persona Contacto 2',
		prc_direccion: 'Test Direccion 2',
		prc_annios_con_entidad: 8,
		prc_telefono: '99225566',
	},
]

// Esta es la estructura de la tabla que va a contener las referencias comerciales. En este caso va a ser enviada a la tabla renderizada en components/pages/clientes/persona_natural/ReferenciasComerciales.tsx
export const refComercialesTableColumns = [
	{
		Header: 'Nombre Entidad',
		accessor: 'prc_nombre_entidad',
	},
	{
		Header: 'Persona de Contacto',
		accessor: 'prc_persona_contacto',
	},
	{
		Header: 'Dirección',
		accessor: 'prc_direccion',
	},
	{
		Header: 'Años con entidad',
		accessor: 'prc_annios_con_entidad',
	},
	{
		Header: 'Teléfono',
		accessor: 'prc_telefono',
	},
]

const referencias_bancarias = [
	{
		prb_nombre_entidad: 'Test Nombre Entidad 1',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 1',
		prb_fecha_inicio_relacion: '09-10-09',
		prb_annios_con_entidad: 4,
		prb_telefono: '1144557788',
		pct_num_cuenta: '123123',
		pct_cod_moneda: 2,
		pct_cod_banco: 2,
	},
	{
		prb_nombre_entidad: 'Test Nombre Entidad 2',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 2',
		prb_fecha_inicio_relacion: '09-10-07',
		prb_annios_con_entidad: 5,
		prb_telefono: '1144557788',
		pct_num_cuenta: '123123',
		pct_cod_moneda: 1,
		pct_cod_banco: 3,
	},
]

const referencias_personales = [
	{
		prp_nombre: 'Test Nombre Referencia 1',
		prp_tipo_doc: 2,
		prp_num_doc: '001-100901-1037U',
		prp_telefono1: '12312323',
		prp_telefono2: '78978923',
		prp_direccion: 'Test Direccion 1',
		prp_lugar_trabajo: 'Test Lugar Trabajo 1',
		prp_telefono_trabajo: '12312312',
		prp_tiempo_conocer: 4,
		prp_e_mail: 'test1@gmail.com',
	},
	{
		prp_nombre: 'Test Nombre Referencia 2',
		prp_tipo_doc: 4,
		prp_num_doc: '001-100901-1037U',
		prp_telefono1: '12390913',
		prp_telefono2: '00999000',
		prp_direccion: 'Test Direccion 2',
		prp_lugar_trabajo: 'Test Lugar Trabajo 2',
		prp_telefono_trabajo: '12312312',
		prp_tiempo_conocer: 2,
		prp_e_mail: 'test2@gmail.com',
	},
]
