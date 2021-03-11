import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
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

import type { Props, Config } from '@/components/Index'
import { Index } from '@/components/Index'

const personaNaturalConfig: Config<
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
> = {
	accessKey: 'p_cod_cliente',
	endpoint: 'cliente_natural',
	navLinks,
	getDescription,
	initialValues
}
const Wrapper = Index<
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
>(personaNaturalConfig)

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
