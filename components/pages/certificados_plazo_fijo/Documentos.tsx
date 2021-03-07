import { Checkbox } from '@/components/forms'
import MultipleChoice from '@/components/forms/MultipleChoice'

const Documentos = () => {
	const fields = [
		{ name: 'pdc_cod_documento', label: 'Fotocopia de cédula', value: 1 },
		{ name: 'pdc_cod_documento', label: 'Constancia salarial', value: 2 },
		{ name: 'pdc_cod_documento', label: 'Carta de recomendación', value: 3 }
	]

	return <MultipleChoice title='Documentos Requeridos' fields={fields} />
}

export default Documentos
