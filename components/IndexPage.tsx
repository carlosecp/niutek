import { ReactNode } from 'react'
import Topbar from './layout/Topbar'

interface Props {
	width?: string
	children: ReactNode
}

const IndexPage = ({ width = 'max-w-2xl', children }: Props) => {
	return (
		<div className='bg-gray-100'>
			<Topbar />
			<main className={`${width} container`}>{children}</main>
		</div>
	)
}

export default IndexPage
