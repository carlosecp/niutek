import { navLinks, NavLinks } from '@/data/solicitud_credito'
import { TextArea } from '@/components/forms'

const SECTION_NAME = NavLinks.Observaciones

const Observaciones = () => {
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
				<TextArea name='test' label='Observaciones' />
			</article>
		</section>
	)
}

export default Observaciones
