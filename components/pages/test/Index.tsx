// Hooks
import useFormData from '@/lib/hooks/useFormData'
// Types
import type { PersonaNaturalValues } from '@/data/persona_natural'
// Values
import { initialValues } from '@/data/persona_natural'

const config = {
	dataSchema: initialValues.values,
	debug: false,
	endpoints: {
		read: 'datos_cliente_natural',
		write: 'datos_cliente_natural'
	}
}

const index = () => {
	const { data } = useFormData<PersonaNaturalValues>()

	return <div>Hello World</div>
}

export default index
