import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
import type { Props, Config } from '@/components/Index'
import * as React from 'react'
import { initialValues, navLinks, getDescription } from '@/data/persona_natural'
import {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	RefPersonales
} from './components'
import { Index } from '@/components/Index'

const config: Config<
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
> = {
	pageType: 'cliente',
	pageName: 'natural',
	navLinks,
	getDescription,
	initialValues
}

const Wrapper = Index<
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
>(config)

const index = (props: Props) => (
	<Wrapper {...props}>
		<PersonaNatural options={props.options} />
		<DatosProfesionales />
		<OrigenFondos />
		<RefComerciales />
		<RefBancarias options={props.options} />
		<RefPersonales options={props.options} />
	</Wrapper>
)

export default index
