import {createContext, useState} from 'react'

export const PageContext = createContext()

export const SectionsProvider = props => {
	const [sections, setSections] = useState()

	const changeCurrentSection = section => {
		if (section && sections) {
			setSections({...sections, current: section})
		}
	}

	return (
		<PageContext.Provider value={{sections, setSections, changeCurrentSection}}>
			{props.children}
		</PageContext.Provider>
	)
}


