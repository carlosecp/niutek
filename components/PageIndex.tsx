import React from 'react'
import Topbar from './layout/Topbar'

interface Props {
	children: React.ReactNode
}

const PageIndex = ({ children }: Props) => {
	return (
		<div className='min-h-screen bg-gray-100'>
			<Topbar />
			<main className='max-w-lg container'>{children}</main>
		</div>
	)
}

export default PageIndex
