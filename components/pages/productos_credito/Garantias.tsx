import { MultipleChoice } from '@/components/forms'

const Garantias = () => {
	const fields = [
		{ name: 'pdc_cod_documento', label: 'Fiduciaria', value: 1 },
		{ name: 'pdc_cod_documento', label: 'Prendaria', value: 2 },
		{ name: 'pdc_cod_documento', label: 'Hipotecaria', value: 3 }
	]

	return <MultipleChoice title='Garantías' fields={fields} />
}

export default Garantias
