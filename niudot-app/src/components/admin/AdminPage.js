import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import { FormNotFound } from '../routing/NotFound'
import RegisterUser from './RegisterUser'
import CreateProfile from './CreateProfile'

const Page = (props) => {
	return (
		<div className='pl-64 cstm:p-0 w-full'>
			<Topbar {...props} />
			<div className='px-4 pt-20 bg-white-gray relative min-h-full pb-4'>
				<Switch>
					<Route exact path='/admin/register' component={RegisterUser} />
					<Route exact path='/admin/profile' component={CreateProfile} />
					<Route path='*' component={FormNotFound} />
				</Switch>
			</div>
		</div>
	)
}

export default Page
