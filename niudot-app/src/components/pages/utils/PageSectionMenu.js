import React, {useContext} from 'react'
import PageContext from '../../../context/sections/SectionsContext'
import PropTypes from 'prop-types'

function PageMenu() {

    const {sections} = useContext(PageContext)
	return (
		<div>
			<div className='page-menu'>
				{Object.keys(sections).map((section) => (
					<PageMenuItem key={section} section={section} />
				))}
			</div>
		</div>
	)
}

/*
	Componente de cada item del menu derecho
*/
function PageMenuItem({ section }) {
	// Obtiene las secciones de la pagina y el metodo para actualizarla
	const {sections, changeCurrentSection} = useContext(PageContext)

	
	const [...setRetraction] = sections[section]
	
	function handleClick() {
		setRetraction(false)
		changeCurrentSection(section)
	}

	function getSectionTitle(sectionTitle) {
		const title = sectionTitle.split('-').slice(0, 2).join(' ')
		return title.charAt(0).toUpperCase() + title.slice(1)
	}

	return (
		<div>
			<a
				href={`#${section}`}
				className={`${sections[current] === section && 'active'}`}
				onClick={() => handleClick()}
			>
				{' '}
				{getSectionTitle(section)}
			</a>
		</div>
	)
}

PageMenu.propTypes = {
	sections: PropTypes.array.isRequired
}

PageMenuItem.propTypes = {
	section: PropTypes.string.isRequired,
	activeSection: PropTypes.string.isRequired,
	setActiveSection: PropTypes.func.isRequired
}

export default PageMenu
