import { Checkbox } from '@/components/forms'
import MultipleChoice from '@/components/forms/MultipleChoice'

const Documentos = () => {
	return (
		<MultipleChoice title='Documentos Requeridos'>
			<Checkbox
				name='test1'
				label='Fotocopia Cédula'
				value={1}
				classes={{
					container: 'fc-lg md:fc-sm',
					input: 'h-input flex form-input relative',
					checkbox:
						'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
				}}
			/>
			<Checkbox
				name='test1'
				label='Constancia Salarial'
				value={2}
				classes={{
					container: 'fc-lg md:fc-sm',
					input: 'h-input flex form-input relative',
					checkbox:
						'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
				}}
			/>
			<Checkbox
				name='test1'
				label='Carta Recomendación'
				value={3}
				classes={{
					container: 'fc-lg md:fc-sm',
					input: 'h-input flex form-input relative',
					checkbox:
						'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
				}}
			/>
		</MultipleChoice>
	)
}

export default Documentos
