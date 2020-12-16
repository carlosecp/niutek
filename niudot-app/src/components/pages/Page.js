import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import Dashboard from './dashboard/Dashboard'
import PersonaJuridica from './clientes/personajuridica/PersonaJuridica'
import PersonaNatural from './clientes/personanatural'
import Products from './products/index'
import Check from './cheques'
import NotFound from '../routing/NotFound'
import AnticipatedCancellation from './caja/anticipatedcancellation/index'
import SavingAccountOpening from './caja/pendingsavingaccountopening'
import FixedTermCertificateOpening from './caja/fixedtermcertificateopening'
import LoanPayment from './caja/loanpayment'
import DepositToSavingsAccount from './caja/deposittosavingsaccount'
import SavingsAccountWithdrawal from './caja/savingsaccountwithdrawal'

function Page(props) {
	return (
		<div className='pl-64 sm:p-0 w-full'>
			<Topbar {...props} />
			<div className='px-4 pt-20 bg-gray-100 relative min-h-full'>
				<Switch>
					<Route exact path='/inicio' component={Dashboard} />
					<Route
						exact
						path='/clientes/persona-natural'
						component={PersonaNatural}
					/>
					<Route
						exact
						path='/clientes/persona-juridica'
						component={PersonaJuridica}
					/>
					<Route exact path='/productos/productos' component={Products} />
					<Route exact path='/cheques/cheques' component={Check} />
					<Route
						exact
						path='/caja/cancelacion-anticipada'
						component={AnticipatedCancellation}
					/>
					<Route
						exact
						path='/caja/apertura-de-cuenta-de-ahorro-pendiente'
						component={SavingAccountOpening}
					/>
					<Route
						exact
						path='/caja/apertura-certificado-a-plazo-fijo'
						component={FixedTermCertificateOpening}
					/>
					<Route
						exact
						path='/caja/apertura-certificado-a-plazo-fijo'
						component={FixedTermCertificateOpening}
					/>
					<Route
						exact
						path='/caja/abono-a-prestamo'
						component={LoanPayment}
					/>
					<Route
						exact
						path='/caja/deposito-a-cuenta-de-ahorro'
						component={DepositToSavingsAccount}
					/>
					<Route
						exact
						path='/caja/retiro-a-cuenta-de-ahorro'
						component={SavingsAccountWithdrawal}
					/>


					{' '}
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
		</div>
	)
}

export default Page
