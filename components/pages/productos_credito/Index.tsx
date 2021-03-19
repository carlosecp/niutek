import type {
	ProductosDeCreditoValues,
	ProductosDeCreditoValidationSchema,
	ProductosDeCreditoSearchResult
} from '@/data/productos_credito/index'
import type { Props, Config } from '@/components/Index'
import * as React from 'react'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/productos_credito'
import { ProductosDeCredito, Cargos } from './components'
import { Index } from '@/components/Index'

const config: Config<
	ProductosDeCreditoValues,
	ProductosDeCreditoValidationSchema,
	ProductosDeCreditoSearchResult
> = {
	pageType: 'productos',
	pageName: 'credito',
	navLinks,
	getDescription,
	initialValues
}

const Wrapper = Index<
	ProductosDeCreditoValues,
	ProductosDeCreditoValidationSchema,
	ProductosDeCreditoSearchResult
>(config)

const index = (props: Props) => {
	return (
		<Wrapper {...props}>
			<ProductosDeCredito options={props.options} />
			<Cargos options={props.options} />
		</Wrapper>
	)
}

export default index
