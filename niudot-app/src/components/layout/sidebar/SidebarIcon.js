import React from 'react'
import { FaHome, FaCashRegister, FaUsers, FaPiggyBank, FaCreditCard, FaChartBar, FaReceipt, FaCircle, FaChevronCircleDown } from 'react-icons/fa/index'

function SidebarIcon({iconCode}) {
	switch (iconCode) {
			case 'FaHome':
				return <FaHome style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaCashRegister':
				return <FaCashRegister style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaUsers':
				return <FaUsers style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaPiggyBank':
				return <FaPiggyBank style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaCreditCard':
				return <FaCreditCard style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaChartBar':
				return <FaChartBar style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaReceipt':
				return <FaReceipt style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaCircle':
				return <FaCircle  style={{display: 'block',marginRight: '0.5rem'}}/>
			case 'FaChevronCircleDown':
				return <FaChevronCircleDown style={{display: 'block',marginRight: '0.5rem'}}/>
			default:
				return <FaChevronCircleDown style={{display: 'block',marginRight: '0.5rem'}}/>
	}
}

export default SidebarIcon
