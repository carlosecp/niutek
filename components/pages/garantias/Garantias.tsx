import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import { navLinks, NavLinks } from '@/data/garantias'
import { Text, Select, TextArea } from '@/components/forms'

const SECTION_NAME = NavLinks.Garantias

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

const ProductosDeCredito = (props: Props) => {
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
				<Select name='p_cod_gar' label='Tipo de garantía'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_cod_cla' label='Clasificación'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_cod_cat' label='Categoría'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text name='p_marca' label='Marca' />
				<Text name='p_modelo' label='Modelo' />
				<Text name='p_annio' label='Año' />
				<Text name='p_color' label='Color' />
				<Text name='p_motor' label='Motor' />
				<Text name='p_chasis' label='Chasis' />
				<Text name='p_no_serie' label='No. serie' />
				<Text name='p_valor' label='Valor' />
				<TextArea name='p_descripcion' label='Descripción' />
			</article>
		</section>
	)
}

export default ProductosDeCredito
