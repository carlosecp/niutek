import * as React from 'react'
import { navLinks, NavLinks } from '@/data/garantias'
import { Text, Select, TextArea } from '@/components/forms'

const SECTION_NAME = NavLinks.Garantias

const Garantias = () => {
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
			<article className='form-section my-2 flex justify-between items-center'></article>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select
					name='p_cod_gar'
					label='Seleccionar garantía'
					classes={{
						container: 'fc-lg md:fc',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={1}>Opcion 1</option>
					<option value={2}>Opcion 2</option>
				</Select>
				<Select
					name='p_cod_gar'
					label='Tipo de garantía'
					classes={{
						container: 'fc-lg md:fc',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={1}>Opcion 1</option>
					<option value={2}>Opcion 2</option>
				</Select>
				<Select
					name='p_cod_cla'
					label='Clasificación'
					classes={{
						container: 'fc-lg md:fc',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={1}>Opcion 1</option>
					<option value={2}>Opcion 2</option>
				</Select>
				<Select
					name='p_cod_cat'
					label='Categoría'
					classes={{
						container: 'fc-lg md:fc',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={1}>Opcion 1</option>
					<option value={2}>Opcion 2</option>
				</Select>
				<Text
					name='p_marca'
					label='Marca'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				/>
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

export default Garantias
