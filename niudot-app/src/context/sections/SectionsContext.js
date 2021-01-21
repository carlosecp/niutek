import React, { createContext, useState } from 'react'

export const PageContext = createContext()

const SectionsProvider = (props) => {
	const [sections, setSections] = useState({})

	const changeCurrentSection = (section) => {
		if (section && sections[section]) {
			sections['current'] = section
			sections[section][0] = false
		}
	}

	return (
		<PageContext.Provider
			value={{ sections, setSections, changeCurrentSection }}
		>
			{props.children}
		</PageContext.Provider>
	)
}

export default SectionsProvider
