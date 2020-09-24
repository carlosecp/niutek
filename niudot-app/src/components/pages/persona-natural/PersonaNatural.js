import React from 'react'
import Topbar from '../../layout/Topbar'
import LargeTitle from '../../styled-components/LargeTitle'
import Description from '../../styled-components/Description';
import MediumButton from '../../styled-components/SmallMediumButton';
import SearchInput from '../../styled-components/SearchInput';
import SmallInput from '../../styled-components/SmallInput';
import Checkbox from '../../styled-components/Checkbox';
import MediumInput from '../../styled-components/MediumInput';
import Dropdown from '../../styled-components/Dropdown';
import MediumDropdown from '../../styled-components/MediumDropdown';

export default function PersonaNatural() {
    return (
        <>
            <Topbar topBarTitle="Persona Natural" />
            <main>
                <LargeTitle titleText="Buscar Cliente Existente" />
                <Description titleText="Buscar entre los clientes regristrados" />
                <SearchInput newPlaceholder="Buscar nuevo cliente" />

                <LargeTitle titleText="Crear Un Nuevo Cliente" />
                <Description titleText="Registra un nuevo cliente" />

                    <div className="form-container ">
                        <SmallInput newPlaceholder="Código de cliente"/>
                        <MediumInput newPlaceholder="Nombres" createNewLine={true}/>
                        <MediumInput newPlaceholder="Apellidos" />
                        <Dropdown newPlaceholder="Tipo identificación" createNewLine={true} />
                        <SmallInput newPlaceholder="No. Identificación"/>
                        <SmallInput newPlaceholder="Nacionalidad"/>
                        <MediumInput newPlaceholder="Fecha de Nacimiento" createNewLine={true}/>
                        <MediumDropdown  newPlaceholder="Estado civil"/>
                        <SmallInput newPlaceholder="Numero de hijos"/>

                        

                        <button className="input-container input-container-sm rounded form-btn-alert btn">
                            Hello World
                        </button>
                        <div className="input-container input-container-xs form-btn-alert rounded">

                        </div>
                        <div className="input-container input-container-xs form-btn-alert rounded">
                            +
                </div>
                        <table className="table-container">
                            <thead>
                                <tr>
                                    <th>Head1</th>
                                    <th>Head2</th>
                                    <th>Head3</th>
                                    <th>Head4</th>
                                    <th>Head4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Data1</td>
                                    <td>Data2</td>
                                    <td>Data3</td>
                                    <td>Data4</td>
                                    <td>Data5</td>
                                </tr>
                                <tr>
                                    <td>Data1</td>
                                    <td>Data2</td>
                                    <td>Data3</td>
                                    <td>Data4</td>
                                    <td>Data5</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="input-container input-container-md alt-input-container">
                            Input Field
                    <div className="input-container-flex alt-input-container">
                                <div className="alt-input rounded-l">Input Value</div>
                                <div className="input-btn rounded-r">
                                    <i className="fas fa-chevron-down icon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="input-container input-container-md-nl alt-input-container">
                            Input Field
                    <div className="input-container-flex alt-input-container">
                                <div className="alt-input rounded-l">Number</div>
                                <div className="input-btn rounded-r">
                                    <i className="fas fa-chevron-down icon"></i>
                                </div>
                            </div>
                    Input Field
                </div>
                </div>
                <div className="form-container">
                    
                    <div
                        className="input-container input-container-md input-container-md-nl input-container-flex"
                    >
                        <div type="text" className="std-input rounded-l">First Option</div>
                        <div className="input-btn rounded-r">
                            <i className="fas fa-chevron-down icon"></i>
                        </div>
                    </div>
                    <div className="input-container input-container-sm">
                        <input type="text" className="std-input rounded" />
                    </div>
                    <div className="input-container input-container-sm">
                        <input type="text" className="std-input rounded" />
                    </div>
                    <div className="input-container input-container-md">
                        <div className="std-input rounded">
                            <input type="checkbox" className="" />
                            <div className="input-checkbox-content">Checkbox Content</div>
                        </div>
                    </div>

                    <button
                        className="input-container input-container-sm rounded form-btn-success btn"
                    >
                        Hello World
			</button>
                    <button
                        className="input-container input-container-sm rounded form-btn-alert btn"
                    >
                        Hello World
			</button>
                    <div className="input-container input-container-xs form-btn-alert rounded">
                        +
			</div>
                    <div className="input-container input-container-xs form-btn-alert rounded">
                        +
			</div>
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th>Head1</th>
                                <th>Head2</th>
                                <th>Head3</th>
                                <th>Head4</th>
                                <th>Head4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data1</td>
                                <td>Data2</td>
                                <td>Data3</td>
                                <td>Data4</td>
                                <td>Data5</td>
                            </tr>
                            <tr>
                                <td>Data1</td>
                                <td>Data2</td>
                                <td>Data3</td>
                                <td>Data4</td>
                                <td>Data5</td>
                            </tr>
                            <tr>
                                <td>Data1</td>
                                <td>Data2</td>
                                <td>Data3</td>
                                <td>Data4</td>
                                <td>Data5</td>
                            </tr>
                            <tr>
                                <td>Data1</td>
                                <td>Data2</td>
                                <td>Data3</td>
                                <td>Data4</td>
                                <td>Data5</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="input-container input-container-md alt-input-container">
                        Input Field
				<div className="input-container-flex alt-input-container">
                            <div className="alt-input rounded-l">Input Value</div>
                            <div className="input-btn rounded-r">
                                <i className="fas fa-chevron-down icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="input-container input-container-md-nl alt-input-container">
                        Input Field
				<div className="input-container-flex alt-input-container">
                            <div className="alt-input rounded-l">Number</div>
                            <div className="input-btn rounded-r">
                                <i className="fas fa-chevron-down icon"></i>
                            </div>
                        </div>
				Input Field
			</div>
                </div>
            </main>
        </>
    )
}
