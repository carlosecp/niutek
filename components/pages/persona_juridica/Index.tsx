import type {
	PersonaJuridicaValues,
	PersonaJuridicaValidationSchema,
	PersonaJuridicaSearchResult
} from '@/data/persona_juridica'
import type { Props, Config } from '@/components/Index'
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
	Proveedores,
	Accionistas
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

const index = (props: Props) => {
	return (
		<Wrapper {...props}>
			<PersonaJuridica options={props.options} />
			<OrigenFondos />
			<RefComerciales />
			<RefBancarias options={props.options} />
			<Proveedores />
			<Accionistas options={props.options} />
		</Wrapper>
	)
}

export default index
