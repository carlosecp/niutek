import type {
	GarantiasValues,
	GarantiasValidationSchema,
	GarantiasSearchResult
} from '@/data/garantias/index'
import type { Props, Config } from '@/components/Index'
import * as React from 'react'
import { initialValues, navLinks, getDescription } from '@/data/garantias'
import { Garantias } from './components'
import { Index } from '@/components/Index'

const config: Config<
	GarantiasValues,
	GarantiasValidationSchema,
	GarantiasSearchResult
> = {
	pageType: 'garantia',
	pageName: 'clientes',
	navLinks,
	getDescription,
	initialValues
}

const Wrapper = Index<
	GarantiasValues,
	GarantiasValidationSchema,
	GarantiasSearchResult
>(config)

const index = (props: Props) => {
	return (
		<Wrapper {...props}>
			<Garantias />
		</Wrapper>
	)
}

export default index
