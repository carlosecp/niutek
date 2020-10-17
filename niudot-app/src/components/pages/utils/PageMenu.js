import React from 'react'
import PropTypes from 'prop-types'

function PageMenu({ sections, ...props }) {
	return (
		<div>
			<div className='page-menu'>
				{sections.map((section) => (
					<PageMenuItem key={section} section={section} {...props} />
				))}
			</div>
		</div>
	)
}

function PageMenuItem({ section, activeSection, setActiveSection }) {
	function handleClick() {
		setActiveSection(section)
	}

	function getSectionTitle(sectionTitle) {
		const title = sectionTitle.split('-').slice(0, 2).join(' ')
		return title.charAt(0).toUpperCase() + title.slice(1)
	}

	return (
		<div>
			<a
				href={`#${section}`}
				className={`${activeSection === section && 'active'}`}
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
