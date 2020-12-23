// React and Router Stuff
import React, { useState } from 'react'
import popupContext from './popupContext'

const PopupState = ({ children }) => {
	const [showPopup, setShowPopup] = useState(false)

	const togglePopup = (event) => {
		event.stopPropagation()
		setShowPopup(!showPopup)
	}

	return (
		<popupContext.Provider value={{ showPopup, togglePopup }}>
			{children}
		</popupContext.Provider>
	)
}

export default PopupState
