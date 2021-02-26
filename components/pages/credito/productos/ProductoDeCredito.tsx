import type { ProductoDeCreditoValues } from './data'
import type {
	TablaOptions,
	DeptosOption,
	MuniOption
} from '../../../../interfaces'
import * as React from 'react'
import { useFormikContext } from 'formik'
import { Text, Select, TextArea } from '../../../templates/forms'
import getMunicipio from '../../../../utils/getMunicipio'
import useMunicipio from '../../../../hooks/useMunicipio'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

export default (props: Props) => {
	const { values } = useFormikContext<ProductoDeCreditoValues>()
	return (
		<section id='producto_de_credito'>
			<a href='#!' id='_producto_de_credito' className='anchor' />
			<h1 className='font-medium text-xl text-gray-900'>Producto de Credito</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select name='p_tipo_credito' label='Tipo de Credito'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='fuente_de_fondos' label='Fondos Propios'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_tipo_contrato' label='Tipo de contrato'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='nombre_del_producto'
					label='Nombre del producto'
					classes={{
						container: 'fc-lg',
						input: 'w_full block form_input for_input_border'
					}}
				/>
				<TextArea name='_descripcion' label='Descripcion' />
				<Select name='p_moneda' label='Moneda'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text name='_tasa_interes_minima' label='Tasa de interes minima' />
				<Text name='_tasa_interes_maxima' label='Tasa de interes maxima' />
				<Text name='_monto_minimo' label='Monto minimo' />
				<Text name='_monto_maximo' label='Monto maximo' />

				<Text name='_plazo_minimo' label='plazo minimo' />
				<Select name='_plazo_meses_maximo' label=''>
					<option value={0} disabled>
						Meses
					</option>
				</Select>

				<Text name='_plazo_minimo' label='plazo minimo' />
				<Select name='_plazos_meses_minimo' label=''>
					<option value={0} disabled>
						Meses
					</option>
				</Select>
				<Select name='_frecuencia_de_pago' label='Frecuencia de Pago'>
					<option value={0} disabled>
						MENSUAL
					</option>
				</Select>
				<Select name='_tipo_cuota' label='Tipo de Cuota'>
					<option value={0} disabled>
						Variable
					</option>
				</Select>
			</article>
		</section>
	)
}
