import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function RightMenu() {
    return (

        //  <Select options={options} className="vertical-menu" />

        
        <div>
            <div class="vertical-menu">
                <a href="#" class="active">Datos Económicos</a>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
            </div>
        </div>
    )
}
