import React from "react"
import { Switch, Route } from "react-router-dom"
import Topbar from "../layout/Topbar"
import Dashboard from "../dashboard"
import { FormNotFound } from "../routing/NotFound"

import {
	Reconciled,
	ToBeRecondiled,
	ToDeliver,
	ToPrint,
	Voided,
} from "./checks"
import { LegalPerson, NaturalPerson } from "./clients"
import {
	CreditProducts,
	CreditRequest,
	CreditResolution,
	CreditFormalization,
} from "./credit"
import Products from "./products"
import {
	AnticipatedCancellation,
	FixedTermCertificateOpening,
	LoanPayment,
	SavingsAccountWithdrawal,
	DepositToSavingsAccount,
} from "./register"
import {
	Items,
	Purchase,
	InventoryProducts,
	Billing,
	InvoiceCancel,
} from "./inventory"
import {
	OrderStubs,
	AccountCancellation,
	FixedTermDepositOpening,
	EarlyCancellation,
	AccountOpening,
} from "./savings"

import { TableMaintenance } from "./table-maintenance"

const Page = (props) => {
	return (
		<div className="pl-64 cstm:p-0 w-full">
			<Topbar {...props} />
			<div className="px-4 pt-20 bg-gray-gray relative min-h-full pb-4">
				<Switch>
					<Route exact path="/app/dashboard" component={Dashboard} />
					{/* CAJA */}
					<Route
						exact
						path="/app/register/anticipated-cancellation"
						component={AnticipatedCancellation}
					/>
					<Route
						exact
						path="/app/register/saving-account"
						component={AccountOpening}
					/>
					<Route
						exact
						path="/app/register/fixed-term-certificate"
						component={FixedTermCertificateOpening}
					/>
					<Route
						exact
						path="/app/register/loan-payment"
						component={LoanPayment}
					/>
					<Route
						exact
						path="/app/register/withdrawal"
						component={SavingsAccountWithdrawal}
					/>
					<Route
						exact
						path="/app/register/deposit"
						component={DepositToSavingsAccount}
					/>
					{/* CLIENTES */}
					<Route
						exact
						path="/app/clients/natural-person"
						component={NaturalPerson}
					/>
					<Route
						exact
						path="/app/clients/legal-person"
						component={LegalPerson}
					/>
					{/* PRODUCTS */}
					<Route exact path="/app/products" component={Products} />
					{/* CREDITO */}
					<Route
						exact
						path="/app/credit/products"
						component={CreditProducts}
					/>
					<Route
						exact
						path="/app/credit/resolution"
						component={CreditResolution}
					/>
					<Route
						exact
						path="/app/credit/request"
						component={CreditRequest}
					/>
					<Route
						exact
						path="/app/credit/formalization"
						component={CreditFormalization}
					/>
					{/* CHEQUES */}
					<Route exact path="/app/checks/print" component={ToPrint} />
					<Route
						exact
						path="/app/checks/deliver"
						component={ToDeliver}
					/>
					<Route
						exact
						path="/app/checks/not-reconciled"
						component={ToBeRecondiled}
					/>
					<Route
						exact
						path="/app/checks/not-reconciled"
						component={ToBeRecondiled}
					/>
					<Route
						exact
						path="/app/checks/reconciled"
						component={Reconciled}
					/>
					<Route
						exact
						path="/app/checks/voided}"
						component={Voided}
					/>
					{/* INVENTORY */}
					<Route
						exact
						path="/app/inventory/items"
						component={Items}
					/>
					<Route exact path="/app/checks/voided" component={Voided} />
					{/* Ahorros */}
					<Route
						exact
						path="/app/ahorros/savings-account-opening"
						component={AccountOpening}
					/>
					<Route
						exact
						path="/app/ahorros/assignment-of-payment-order-stubs"
						component={OrderStubs}
					/>
					<Route
						exact
						path="/app/ahorros/saving-account-cancellation"
						component={AccountCancellation}
					/>
					<Route
						exact
						path="/app/ahorros/fixed-term-deposit-opening"
						component={FixedTermDepositOpening}
					/>
					<Route
						exact
						path="/app/ahorros/early-cancellation-fixed-term-deposit"
						component={EarlyCancellation}
					/>
					<Route
						exact
						path="/app/inventory/billing"
						component={Billing}
					/>
					<Route
						exact
						path="/app/inventory/items"
						component={Items}
					/>
					<Route
						exact
						path="/app/inventory/purchase"
						component={Purchase}
					/>
					<Route
						exact
						path="/app/inventory/invoice-cancel"
						component={InvoiceCancel}
					/>
					<Route
						exact
						path="/app/inventory/products"
						component={InventoryProducts}
					/>
					<Route
						exact
						path="/app/table-maintenance"
						component={TableMaintenance}
					/>
					{/* NOT FOUND */}
					<Route path="*" component={FormNotFound} />
				</Switch>
			</div>
		</div>
	)
}

export default Page
