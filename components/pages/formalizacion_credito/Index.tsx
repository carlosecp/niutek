import type {
	Values,
	Validations,
	SearchResults
} from '@/data/formalizacion_credito/index'
import * as React from 'react'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/formalizacion_credito'
import { FormalizacionDeCredito, Cargos } from './components'
import type { Props, Config } from '@/components/OldIndex'
import { Index } from '@/components/OldIndex'

const config: Config<Values, Validations, SearchResults> = {
	pageType: 'producto',
	pageName: 'formalizacion',
	navLinks,
	getDescription,
	initialValues
}
const Wrapper = Index<Values, Validations, SearchResults>(config)

const index = (props: Props) => {
	return (
		<Wrapper {...props}>
			<FormalizacionDeCredito options={props.options} />
			<Cargos options={props.options} />
		</Wrapper>
	)
}

export default index
