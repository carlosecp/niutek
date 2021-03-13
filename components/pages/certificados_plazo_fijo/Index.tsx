import type {
	CertificadosPlazoFijoValues,
	CertificadosPlazoFijoValidationSchema,
	CertificadosPlazoFijoSearchResults
} from '@/data/certificados_plazo_fijo'
import type { Props, Config } from '@/components/Index'
import * as React from 'react'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/certificados_plazo_fijo'
import { CertificadosPlazoFijo } from './components'
import { Index } from '@/components/Index'

const config: Config<
	CertificadosPlazoFijoValues,
	CertificadosPlazoFijoValidationSchema,
	CertificadosPlazoFijoSearchResults
> = {
	pageType: 'productos',
	pageName: 'certificados',
	navLinks,
	navBarTitle: 'Certificados a Plazo Fijo',
	getDescription,
	initialValues
}

const Wrapper = Index<
	CertificadosPlazoFijoValues,
	CertificadosPlazoFijoValidationSchema,
	CertificadosPlazoFijoSearchResults
>(config)

const index = (props: Props) => (
	<Wrapper {...props}>
		<CertificadosPlazoFijo options={props.options} />
	</Wrapper>
)

export default index
