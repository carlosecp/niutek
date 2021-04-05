import type {
	SolicitudDeCreditoValues,
	SolicitudDeCreditoValidationSchema,
	SolicitudDeCreditoSearchResult
} from '@/data/solicitud_credito/index'
import type { Props, Config } from '@/components/OldIndex'
import * as React from 'react'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/solicitud_credito'
import { SolicitudDeCredito, Garantias, Observaciones } from './components'
import { Index } from '@/components/OldIndex'

const config: Config<
	SolicitudDeCreditoValues,
	SolicitudDeCreditoValidationSchema,
	SolicitudDeCreditoSearchResult
> = {
	pageType: 'producto',
	pageName: 'solicitud',
	navLinks,
	getDescription,
	initialValues
}

const Wrapper = Index<
	SolicitudDeCreditoValues,
	SolicitudDeCreditoValidationSchema,
	SolicitudDeCreditoSearchResult
>(config)

const index = (props: Props) => {
	return (
		<Wrapper {...props}>
			<SolicitudDeCredito options={props.options} />
			<Garantias options={props.options} />
			<Observaciones />
		</Wrapper>
	)
}

export default index
