import { Checkbox } from '../../../forms'
import MultipleChoice from '../../../forms/MultipleChoice'

const Garantias = () => {
	return (
		<MultipleChoice title='Tipo de garantías'>
			<Checkbox
				name='test1'
				label='Fiduciaria'
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
				label='Prendaria'
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
				label='Hipotecaria'
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

export default Garantias
