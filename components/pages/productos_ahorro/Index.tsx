import type {
	ProductosDeAhorroValues,
	ProductosDeAhorroValidationSchema,
	ProductosDeAhorroSearchResult
} from '@/data/productos_ahorro/index'
import type { Props, Config } from '@/components/Index'
import * as React from 'react'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/productos_ahorro'
import { ProductosDeAhorro } from './components'
import { Index } from '@/components/Index'

const config: Config<
	ProductosDeAhorroValues,
	ProductosDeAhorroValidationSchema,
	ProductosDeAhorroSearchResult
> = {
	pageType: 'productos',
	pageName: 'ahorro',
	navLinks,
	navBarTitle: 'Productos de Ahorro',
	getDescription,
	initialValues
}

const Wrapper = Index<
	ProductosDeAhorroValues,
	ProductosDeAhorroValidationSchema,
	ProductosDeAhorroSearchResult
>(config)

const index = (props: Props) => (
	<Wrapper {...props}>
		<ProductosDeAhorro options={props.options} />
	</Wrapper>
)

export default index
