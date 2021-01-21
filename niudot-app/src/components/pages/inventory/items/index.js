import React, { useState, useContext, useEffect } from "react"

import SearchCheckForm from "../../utils/search/SearchCheckForm"

import routesContext from "../../../../context/routes/routesContext"
import ItemsCatalogue from "./ItemsCatalogue"
import NewItemPopup from "./popups/NewItemPopup"
import { FaCheck, FaPlus } from "react-icons/fa"

const Items = () => {
	const { changePage } = useContext(routesContext)
	const [showAddPopup, setShowAddPopup] = useState(false)

	useEffect(() => {
		changePage("Catálogo de Artículos")
		// eslint-disable-next-line
	}, [])

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup)
	}

	return (
		<>
			<div className="mt-4 section">
				<SearchCheckForm />
				<h2 className="text-black-white text-xl font-bold">
					Agregar Nuevo Artículo
				</h2>
				<ItemsCatalogue />
				{showAddPopup && <NewItemPopup togglePopup={toggleAddPopup} />}
				<div className="flex gap-2 justify-center flex-wrap">
					<button className="btn flex gap-2 items-center bg-blue-blue btn-border-blue">
						Guardar
						<FaCheck />
					</button>
					<button
						className="btn flex gap-2 items-center bg-blue-blue btn-border-blue"
						onClick={toggleAddPopup}
					>
						Nuevo Artículo
						<FaPlus />
					</button>
				</div>
			</div>
		</>
	)
}

export default Items
