import React from 'react'

function PageMenu({ sections, ...props }) {
    return (
        <div>
            <div className="page-menu">
                { sections.map((section) => <PageMenuItem section={section} {...props} />) }
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
            <a href={`#${section}`} className={`${activeSection === section && 'active'}`} onClick={() => handleClick()}> {getSectionTitle(section)}</a>
        </div>
    )
}

export default PageMenu