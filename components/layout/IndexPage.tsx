import { ReactNode } from 'react'
import Topbar from '../layout/Topbar'

interface Props {
	width?: string
	children: ReactNode
}

const IndexPage = ({ width = 'max-w-2xl', children }: Props) => {
	return (
		<div className='min-h-full bg-bgl0'>
			<Topbar />
			<main className={`${width} container w-full `}>{children}</main>
		</div>
	)
}

export default IndexPage
