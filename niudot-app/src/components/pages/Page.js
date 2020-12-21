import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import Dashboard from '../dashboard'
import { FormNotFound } from '../routing/NotFound'
// Other Components
import {
	Reconciled,
	ToBeRecondiled,
	ToDeliver,
	ToPrint,
	Voided
} from './checks'
import { LegalPerson, NaturalPerson } from './clients'
import { CreditProducts, CreditRequest, CreditResolution } from './credit'
import Products from './products'
import {
	AnticipatedCancellation,
	FixedTermCertificateOpening,
	LoanPayment,
	SavingsAccountOpening,
	SavingsAccountWithdrawal,
	DepositToSavingsAccount
} from './register'

function Page(props) {
	return (
		<div className='pl-64 cstm:p-0 w-full'>
			<Topbar {...props} />
			<div className='px-4 pt-20 bg-white-gray relative min-h-full'>
				<Switch>
					<Route exact path='/app/dashboard' component={Dashboard} />
					{/* CAJA */}
					<Route
						exact
						path='/app/register/anticipated-cancellation'
						component={AnticipatedCancellation}
					/>
					<Route
						exact
						path='/app/register/saving-account'
						component={SavingsAccountOpening}
					/>
					<Route
						exact
						path='/app/register/fixed-term-certificate'
						component={FixedTermCertificateOpening}
					/>
					<Route
						exact
						path='/app/register/loan-payment'
						component={LoanPayment}
					/>
					<Route
						exact
						path='/app/register/withdrawal'
						component={SavingsAccountWithdrawal}
					/>
					<Route
						exact
						path='/app/register/deposit'
						component={DepositToSavingsAccount}
					/>
					{/* CLIENTES */}
					<Route
						exact
						path='/app/clients/natural-person'
						component={NaturalPerson}
					/>
					<Route
						exact
						path='/app/clients/legal-person'
						component={LegalPerson}
					/>
					{/* PRODUCTS */}
					<Route exact path='/app/products' component={Products} />
					{/* CREDITO */}
					<Route exact path='/app/credit/products' component={CreditProducts} />
					<Route
						exact
						path='/app/credit/resolution'
						component={CreditResolution}
					/>
					<Route exact path='/app/credit/request' component={CreditRequest} />
					{/* CHEQUES */}
					<Route exact path='/app/checks/print' component={ToPrint} />
					<Route exact path='/app/checks/deliver' component={ToDeliver} />
					<Route
						exact
						path='/app/checks/not-reconciled'
						component={ToBeRecondiled}
					/>
					<Route
						exact
						path='/app/checks/not-reconciled'
						component={ToBeRecondiled}
					/>
					<Route exact path='/app/checks/reconciled' component={Reconciled} />
					<Route exact path='/app/checks/voided}' component={Voided} />
					{/* NOT FOUND */}
					<Route path='*' component={FormNotFound} />
				</Switch>
			</div>
		</div>
	)
}

export default Page
