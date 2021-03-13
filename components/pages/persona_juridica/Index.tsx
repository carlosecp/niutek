import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import type {
	PersonaJuridicaValues,
	PersonaJuridicaValidationSchema,
	PersonaJuridicaSearchResult
} from '@/data/persona_juridica'
import * as React from 'react'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/persona_juridica'
import {
	PersonaJuridica,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	Proveedores
} from './components'
import { Index } from '@/components/Index'

const config: Config<
	PersonaJuridicaValues,
	PersonaJuridicaValidationSchema,
	PersonaJuridicaSearchResult
> = {
	pageType: 'cliente',
	pageName: 'juridico',
	navLinks,
	getDescription,
	initialValues
}

const Wrapper = Index<
	PersonaJuridicaValues,
	PersonaJuridicaValidationSchema,
	PersonaJuridicaSearchResult
>(config)

const pjIndex = (props: Props) => {
	return (
		<Wrapper {...props}>
			<PersonaJuridica options={props.options} />
			<OrigenFondos />
			<RefComerciales />
			<RefBancarias options={props.options} />
			<Proveedores options={props.options} />
		</Wrapper>
	)
}

export default pjIndex
