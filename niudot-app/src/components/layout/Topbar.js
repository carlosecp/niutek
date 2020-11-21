import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import pages from '../pages/pages'

function Topbar({ toggled, setToggled }) {
  const location = useLocation()
  const dropdownOptions = [...pages.map((page) => page.dropdownOptions)]

  let options = [{ path: 'inicio', name: 'Inicio' }]
  dropdownOptions.forEach((optionsArray) => {
    optionsArray.forEach((option) => options.push(option))
  })

  const [currentPage] = options.filter(
    (option) => `/${option.path}` === location.pathname
  )

  return (
    <div className='topbar'>
      <h2>{currentPage.name}</h2>
      <div className='burger-btn' onClick={() => setToggled(!toggled)}>
        <FaBars className='burger-icon' />
      </div>
    </div>
  )
}

Topbar.propTypes = {
  toggled: PropTypes.bool.isRequired,
  setToggled: PropTypes.func.isRequired
}

export default Topbar
