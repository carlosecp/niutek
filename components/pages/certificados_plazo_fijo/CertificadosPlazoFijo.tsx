import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import * as React from 'react'
import { navLinks, NavLinks } from '@/data/certificados_plazo_fijo'
import { Text, Select, TextArea, MultipleChoice } from '@/components/forms'

const SECTION_NAME = NavLinks.Certificados
interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const documentos = [
	{ name: 'pdc_cod_documento', label: 'Fotocopia de cédula', value: 1 },
	{ name: 'pdc_cod_documento', label: 'Constancia salarial', value: 2 },
	{ name: 'pdc_cod_documento', label: 'Carta de recomendación', value: 3 }
]

const CertificadosPlazoFijo = (props: Props) => {
	return (
		<section id={navLinks[SECTION_NAME].anchor}>
			<a
				href='#!'
				id={`_${navLinks[SECTION_NAME].anchor}`}
				className='anchor'
			></a>
			<h1 className='font-medium text-xl text-gray-900'>
				{navLinks[SECTION_NAME].name}
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='p_nombre' label='Nombre del producto' />
				<TextArea name='p_descripcion' label='Descripcion' />
				<Select name='p_cod_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Text
					name='p_tasa_interes'
					label='Tasa de interes mensual'
					type='number'
				/>
				<Text
					name='p_monto_minimo_apertura'
					label='Monto minimo apertura'
					type='number'
				/>
				<Text
					name='p_monto_promedio_mensual'
					label='Monto promedio mensual'
					type='number'
				/>
				<Text
					name='p_max_retiros_mes'
					label='Maximos retiros mensuales'
					type='number'
				/>
				<Text
					name='p_monto_max_por_retiro'
					label='Monto maximo por retiro'
					type='number'
				/>
				<MultipleChoice
					title='Documentos Requeridos'
					fields={documentos}
					horizontal
				/>
			</article>
		</section>
	)
}

export default CertificadosPlazoFijo
