import React, { useState, useContext, useEffect } from "react"

import SearchCheckForm from "../../utils/search/SearchCheckForm"
import PrintChecksTable from "./PrintChecksTable"
import EditChecksPopup from "./EditChecksPopup"
import AddChecksPopup from "./AddChecksPopup"

import routesContext from "../../../../context/routes/routesContext"
import { FaPlus, FaChartLine, FaPrint } from "react-icons/fa"

const ChecksToPrint = () => {
	const { changePage } = useContext(routesContext)
	const [showEditPopup, setShowEditPopup] = useState(false)
	const [showAddPopup, setShowAddPopup] = useState(false)
	const [loading, setLoading] = useState(true)
	const [activeCheck, setActiveCheck] = useState(null)

	useEffect(() => {
		changePage("Cheques Por Imprimir")
		// eslint-disable-next-line
	}, [])

	const toggleEditPopup = (checkId) => {
		setActiveCheck(checkId)
		setShowEditPopup(!showEditPopup)
	}

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup)
	}

	return (
		<>
			<SearchCheckForm />
			<div className="section">
				<h2 className="text-black-white font-bold text-xl mb-2">
					Cheques
				</h2>
				<PrintChecksTable
					togglePopup={toggleEditPopup}
					setLoading={setLoading}
					loading={loading}
				/>
				{showEditPopup && (
					<EditChecksPopup
						togglePopup={toggleEditPopup}
						checkId={activeCheck}
					/>
				)}
				{showAddPopup && (
					<AddChecksPopup
						togglePopup={toggleAddPopup}
						checkId={activeCheck}
					/>
				)}
				<div className="mt-4 flex gap-2 justify-center flex-wrap">
					<button
						className="btn bg-blue-blue btn-border-blue flex items-center gap-2"
						onClick={toggleAddPopup}
					>
						Agregar
						<FaPlus />
					</button>
					<button className="btn bg-blue-blue btn-border-blue flex items-center gap-2">
						Imprimir Listado
						<FaPrint />
					</button>
					<button className="btn flex items-center bg-blue-blue btn-border-blue gap-2">
						Reporte de Cheques
						<FaChartLine />
					</button>
				</div>
			</div>
		</>
	)
}

export default ChecksToPrint
