import React from 'react'
import {
	FaCashRegister,
	FaUsers,
	FaPiggyBank,
	FaCreditCard,
	FaChartBar,
	FaReceipt,
	FaCircle,
	FaChevronCircleDown
} from 'react-icons/fa/index'

function SidebarIcon({ iconCode }) {
	switch (iconCode) {
		case 'FaCashRegister':
			return <FaCashRegister className='sidebar-item-icon' />
		case 'FaUsers':
			return <FaUsers className='sidebar-item-icon' />
		case 'FaPiggyBank':
			return <FaPiggyBank className='sidebar-item-icon' />
		case 'FaCreditCard':
			return <FaCreditCard className='sidebar-item-icon' />
		case 'FaChartBar':
			return <FaChartBar className='sidebar-item-icon' />
		case 'FaReceipt':
			return <FaReceipt className='sidebar-item-icon' />
		case 'FaCircle':
			return <FaCircle className='sidebar-item-icon' />
		case 'FaChevronCircleDown':
			return <FaChevronCircleDown className='sidebar-item-icon' />
		default:
			return <FaChevronCircleDown className='sidebar-item-icon' />
	}
}

export default SidebarIcon
