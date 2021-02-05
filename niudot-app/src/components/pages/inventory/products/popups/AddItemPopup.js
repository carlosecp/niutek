import React from "react"
import Popup from "../../../utils/tables/Popup"
import SearchItemForm from "../../../utils/search/SearchItemForm"

const AddItemPopup = ({ togglePopup }) => {
	return (
		<Popup togglePopup={togglePopup}>
			<form className="section py-16 mt-8">
				<SearchItemForm />
			</form>
		</Popup>
	)
}

export default AddItemPopup
