import React from 'react'
import SidebarItem from './SidebarItem'

const pages = [
    { path: 'Inicio', iconCode: 'FaHome', dropdownOptions: ['Option1', 'Option2', 'Option3'] }, 
    { path: 'Caja', iconCode: 'FaCashRegister', dropdownOptions: ['Option1', 'Option2', 'Option3'] }, 
    { path: 'Clientes', iconCode: 'FaUsers', dropdownOptions: ['Persona Natural', 'Persona Juridica'] }, 
    { path: 'Ahorros', iconCode: 'FaPiggyBank', dropdownOptions: ['Option1', 'Option2', 'Option3']}, 
    { path: 'Reportes', iconCode: 'FaChartBar', dropdownOptions: ['Option1', 'Option2', 'Option3'] }, 
    { path: 'Cobranza', iconCode: 'FaReceipt', dropdownOptions: ['Option1', 'Option2', 'Option3'] }, 
    { path: 'Productos', iconCode: 'FaChevronCircleDown', dropdownOptions: ['Option1', 'Option2', 'Option3'] }, 
    { path: 'Credito', iconCode: 'FaCreditCard', dropdownOptions: ['Option1', 'Option2', 'Option3'] }
]

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <nav className='sidebar-nav'>
                <ul className='sidebar-nav-list'>
                    {pages.map(page => (
                        <SidebarItem key={page.path} page={page} />
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
