import { TextArea } from '@/components/forms'

const Observaciones = () => (
	<section id='observaciones'>
		<h1 className='font-medium text-xl text-gray-900'>Observaciones</h1>
		<a href='#!' id='_observaciones' className='anchor'></a>
		<article className='form-section my-2 grid grid-cols-12 gap-4'>
			<TextArea
				name='p_observaciones_solicitud'
				label='Observaciones Solicitud'
			/>
			<TextArea
				name='p_observaciones_resolucion'
				label='Observaciones resolucion'
			/>
		</article>
	</section>
)

export default Observaciones
