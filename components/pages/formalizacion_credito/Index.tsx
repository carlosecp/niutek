import type {
	FormalizacionDeCreditoValues,
	FormalizacionDeCreditoValidationSchema,
	FormalizacionDeCreditoSearchResult
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

const config: Config<
	FormalizacionDeCreditoValues,
	FormalizacionDeCreditoValidationSchema,
	FormalizacionDeCreditoSearchResult
> = {
	pageType: 'producto',
	pageName: 'formalizacion',
	navLinks,
	getDescription,
	initialValues
}
const Wrapper = Index<
	FormalizacionDeCreditoValues,
	FormalizacionDeCreditoValidationSchema,
	FormalizacionDeCreditoSearchResult
>(config)

const index = (props: Props) => {
	return (
		<Wrapper {...props}>
			<FormalizacionDeCredito options={props.options} />
			<Cargos options={props.options} />
		</Wrapper>
	)
}

export default index
