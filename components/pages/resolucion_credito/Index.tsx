import type {
	ResolucionDeCreditoValues,
	ResolucionDeCreditoValidationSchema,
	ResolucionDeCreditoSearchResult
} from '@/data/resolucion_credito/index'
import * as React from 'react'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/resolucion_credito'
import { Garantias, ResolucionDeCredito, Observaciones } from './components'
import { Index } from '@/components/OldIndex'
import type { Props, Config } from '@/components/OldIndex'

const config: Config<
	ResolucionDeCreditoValues,
	ResolucionDeCreditoValidationSchema,
	ResolucionDeCreditoSearchResult
> = {
	pageType: 'producto',
	pageName: 'resolucion',
	navLinks,
	getDescription,
	initialValues
}

const Wrapper = Index<
	ResolucionDeCreditoValues,
	ResolucionDeCreditoValidationSchema,
	ResolucionDeCreditoSearchResult
>(config)

const index = (props: Props) => {
	return (
		<Wrapper {...props}>
			<ResolucionDeCredito options={props.options} />
			<Garantias options={props.options} />
			<Observaciones />
		</Wrapper>
	)
}

export default index
