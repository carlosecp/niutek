import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import Dashboard from '../dashboard'
import { FormNotFound } from '../routing/NotFound'

import {
	Reconciled,
	ToBeRecondiled,
	ToDeliver,
	ToPrint,
	Voided,
} from './checks'
import { LegalPerson, NaturalPerson } from './clients'
import {
	CreditProducts,
	CreditRequest,
	CreditResolution,
	CreditFormalization,
} from './credit'
import {
	AnticipatedCancellation,
	FixedTermCertificateOpening,
	LoanPayment,
	SavingsAccountWithdrawal,
	DepositToSavingsAccount,
} from './register'
import {
	Items,
	Purchase,
	InventoryProducts,
	Billing,
	InvoiceCancel,
} from './inventory'
import { Savings, Certificates, Credit } from './products'

import { TableMaintenance } from './table-maintenance'
import Alerts from './Alerts'

const Page = (props) => {
	return (
		<div className='pl-64 cstm:p-0 w-full'>
			<Alerts />
			<Topbar {...props} />
			<div className='px-4 pt-20 bg-gray-gray relative min-h-full pb-4'>
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
					{/* CREDITO */}
					<Route exact path='/app/credit/products' component={CreditProducts} />
					<Route
						exact
						path='/app/credit/resolution'
						component={CreditResolution}
					/>
					<Route exact path='/app/credit/request' component={CreditRequest} />
					<Route
						exact
						path='/app/credit/formalization'
						component={CreditFormalization}
					/>
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
					{/* INVENTORY */}
					<Route exact path='/app/inventory/items' component={Items} />
					<Route exact path='/app/checks/voided' component={Voided} />
					{/* Productos */}
					<Route exact path='/app/products/savings' component={Savings} />
					<Route
						exact
						path='/app/products/certificates'
						component={Certificates}
					/>
					<Route exact path='/app/products/credit' component={Credit} />
					{/* Inventario */}
					<Route exact path='/app/inventory/billing' component={Billing} />
					<Route exact path='/app/inventory/items' component={Items} />
					<Route exact path='/app/inventory/purchase' component={Purchase} />
					<Route
						exact
						path='/app/inventory/invoice-cancel'
						component={InvoiceCancel}
					/>
					<Route
						exact
						path='/app/inventory/products'
						component={InventoryProducts}
					/>
					<Route
						exact
						path='/app/table-maintenance'
						component={TableMaintenance}
					/>
					{/* NOT FOUND */}
					<Route path='*' component={FormNotFound} />
				</Switch>
			</div>
		</div>
	)
}

export default Page
