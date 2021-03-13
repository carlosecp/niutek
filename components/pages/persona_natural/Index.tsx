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
	navBarTitle: 'p_naturales',
	navLinks,
	getDescription,
	initialValues
}
const Wrapper = Index<
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
>(config)

const pnIndex = (props: Props) => {
	return (
		<Wrapper {...props}>
			<PersonaNatural options={props.options} />
			<DatosProfesionales />
			<OrigenFondos />
			<RefComerciales />
			<RefBancarias options={props.options} />
			<RefPersonales options={props.options} />
		</Wrapper>
	)
}
export default pnIndex
