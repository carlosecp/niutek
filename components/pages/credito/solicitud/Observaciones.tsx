import { TextArea } from '../../../templates/forms'

const Observaciones = () => {
	return (
		<section id='observaciones'>
			<a href='#!' id='_observaciones' className='anchor'></a>
			<h1 className='font-medium text-xl text-gray-900'>Observaciones</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<TextArea name='test' label='Observaciones' />
			</article>
		</section>
	)
}

export default Observaciones
