import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import Dashboard from './dashboard/Dashboard'
import PersonaJuridica from './clientes/personajuridica/PersonaJuridica'
import PersonaNatural from './clientes/personanatural'
import Products from './products/index'
import ChecksToPrint from './cheques/checkstoprint'
import AnticipatedCancellation from './caja/anticipatedcancellation/index'
import SavingAccountOpening from './caja/pendingsavingaccountopening'
import FixedTermCertificateOpening from './caja/fixedtermcertificateopening'
import LoanPayment from './caja/loanpayment'
import DepositToSavingsAccount from './caja/deposittosavingsaccount'
import SavingsAccountWithdrawal from './caja/savingsaccountwithdrawal'
import { FormNotFound } from '../routing/NotFound'
import ChecksToDeliver from './cheques/checkstodeliver'
import ChecksToBeReconciled from './cheques/checkstobereconciled'
import ReconciledChecks from './cheques/reconciledchecks'
import VoidedChecks from './cheques/voidedchecks'
import CreditProducts from './credit/creditproducts'

function Page(props) {
	return (
		<div className='pl-64 cstm:p-0 w-full'>
			<Topbar {...props} />
			<div className='px-4 pt-20 bg-white-gray relative min-h-full'>
				<Switch>
					<Route exact path='/app/inicio' component={Dashboard} />
					<Route
						exact
						path='/app/clientes/persona-natural'
						component={PersonaNatural}
					/>
					<Route
						exact
						path='/app/clientes/persona-juridica'
						component={PersonaJuridica}
					/>
					<Route exact path='/app/productos/productos' component={Products} />
					<Route
						exact
						path='/app/cheques/cheques-por-imprimir'
						component={ChecksToPrint}
					/>
					<Route
						exact
						path='/app/cheques/cheques-por-entregar'
						component={ChecksToDeliver}
					/>
					<Route
						exact
						path='/app/cheques/cheques-por-conciliar'
						component={ChecksToBeReconciled}
					/>
					<Route
						exact
						path='/app/cheques/cheques-conciliados'
						component={ReconciledChecks}
					/>
					<Route
						exact
						path='/app/cheques/cheques-anulados'
						component={VoidedChecks}
					/>
					<Route
						exact
						path='/app/caja/cancelacion-anticipada'
						component={AnticipatedCancellation}
					/>
					<Route
						exact
						path='/app/caja/apertura-de-cuenta-de-ahorro-pendiente'
						component={SavingAccountOpening}
					/>
					<Route
						exact
						path='/app/caja/apertura-certificado-a-plazo-fijo'
						component={FixedTermCertificateOpening}
					/>
					<Route
						exact
						path='/app/caja/abono-a-prestamo'
						component={LoanPayment}
					/>
					<Route
						exact
						path='/app/caja/deposito-a-cuenta-de-ahorro'
						component={DepositToSavingsAccount}
					/>
					<Route
						exact
						path='/app/caja/retiro-a-cuenta-de-ahorro'
						component={SavingsAccountWithdrawal}
					/>
					<Route
						exact
						path='/app/credito/productos-de-credito'
						component={CreditProducts}
					/>
					<Route path='*' component={FormNotFound} />
				</Switch>
			</div>
		</div>
	)
}

export default Page
