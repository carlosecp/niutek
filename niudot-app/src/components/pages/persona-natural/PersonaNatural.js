import React from 'react'
import Topbar from '../../layout/Topbar'
import LargeTitle from '../../styled-components/LargeTitle'
import Description from '../../styled-components/Description';
import MediumButton from '../../styled-components/MediumButton';
import SearchInput from '../../styled-components/SearchInput';
import SmallInput from '../../styled-components/SmallInput';
import Checkbox from '../../styled-components/Checkbox';
import MediumInput from '../../styled-components/MediumInput';
import Dropdown from '../../styled-components/Dropdown';
import MediumDropdown from '../../styled-components/MediumDropdown';
import LargeInput from '../../styled-components/LargeInput';
import { FaChevronRight } from 'react-icons/fa';
import Table from '../../styled-components/Table';
import MediumInputValue from '../../styled-components/MediumInputValue';
import SmallInputValue from '../../styled-components/SmallInputValue';
import MediumTitle from '../../styled-components/MediumTitle';
import SaveCancel from '../../styled-components/SaveCancel';



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

                    <SmallInput newPlaceholder="Código de cliente" />

                    <MediumInput newPlaceholder="Nombres" createNewLine={true} />
                    <MediumInput newPlaceholder="Apellidos" />
                    <Dropdown newPlaceholder="Tipo identificación" createNewLine={true} />
                    <SmallInput newPlaceholder="No. Identificación" />

                    <SmallInput newPlaceholder="Nacionalidad" />
                    <MediumInput newPlaceholder="Fecha de Nacimiento" createNewLine={true} />
                    <MediumDropdown newPlaceholder="Estado civil" />
                    <SmallInput newPlaceholder="Numero de hijos" />

                    <LargeInput newPlaceholder="Dirección" />

                    <SmallInput newPlaceholder="Teléfono 1" />
                    <SmallInput newPlaceholder="Teléfono 2" />
                    <SmallInput newPlaceholder="Municipio" />
                    <SmallInput newPlaceholder="Departamento" />

                    <Checkbox CheckboxContent="Ha desempeñado un cargo público" />

                </div>

                <LargeTitle titleText="Datos profesionales y económicos" />

                <div className="form-container">
                    <MediumInput newPlaceholder="Profesion u Oficio" />
                    <MediumInput newPlaceholder="Ocupación/Puesto" />

                    <MediumInput newPlaceholder="Nombre de la empresa" />
                    <MediumInput newPlaceholder="Descripción actividad de la empresa" />

                    <SmallInput newPlaceholder="Teléfono de empresa" />
                    <SmallInput newPlaceholder="Email empresa" />

                    <MediumInput newPlaceholder="Ingreso anual aproximado" />
                </div>




                <LargeTitle titleText="Origen de Fondos" />

                <div className="form-container">
                    <Checkbox CheckboxContent="Negocio Propio" />
                    <MediumInput newPlaceholder="Profesión que ejerce" />

                    <Checkbox CheckboxContent="Negocio Propio" />
                    <MediumInput newPlaceholder="Profesión que ejerce" />

                    <Checkbox CheckboxContent="Negocio Propio" />
                    <SmallInput newPlaceholder="Procedencia" />
                    <SmallInput newPlaceholder="Monto Herencia" />

                    <Checkbox CheckboxContent="Negocio Propio" />
                    <MediumInput newPlaceholder="Profesión que ejerce" />

                    <Checkbox CheckboxContent="Negocio Propio" />
                    <MediumInput newPlaceholder="Profesión que ejerce" />

                    <Checkbox CheckboxContent="Negocio Propio" />

                    <Checkbox CheckboxContent="Negocio Propio" createNewLine={true}/>
                    <MediumInput newPlaceholder="Profesión que ejerce" />

                    <Checkbox CheckboxContent="Negocio Propio" />
                    <MediumInput newPlaceholder="Profesión que ejerce" />
                </div>

                <LargeTitle titleText="Referencias" />
                
                <div className="">

                <MediumTitle titleText="Referencias Comerciales" />

                <div className="form-container">
                    <MediumInput newPlaceholder="Nombre de la entidad" />
                    <MediumInput newPlaceholder="Persona de contacto" />
                    <LargeInput newPlaceholder="Dirección" />
                    <MediumInput newPlaceholder="Años con la entidad" />
                    <MediumInput newPlaceholder="Teléfono" />
                </div>

                <MediumTitle titleText="Referencias Bancarias" />

                <div className="form-container">
                    <MediumInput newPlaceholder="Nombre de la entidad" />
                    <MediumInput newPlaceholder="Fecha de inicio de la relación" createNewLine={true}/>
                    <MediumInput newPlaceholder="Tipo de serviicio recibido" />
                    <MediumInput newPlaceholder="Años con la entidad" />
                    <MediumInput newPlaceholder="Teléfono" />
                    <SmallInput newPlaceholder="Número de cuenta" />
                    <MediumDropdown newPlaceholder="Moneda"/>
                    <MediumInput newPlaceholder="Nombre del banco" />
                    <SmallInput newPlaceholder="Número de cuenta" />
                    <MediumDropdown newPlaceholder="Moneda"/>
                    <MediumInput newPlaceholder="Nombre del banco" />
                    <SmallInput newPlaceholder="Número de cuenta" />
                    <MediumDropdown newPlaceholder="Moneda"/>
                    <MediumInput newPlaceholder="Nombre del banco" />
                </div>
                
                <MediumTitle titleText="Referencias Personales 1" />

                <div className="form-container">
                    <MediumInput newPlaceholder="Nombre de la entidad" />
                    <MediumInput newPlaceholder="Nombre de la entidad" />
                    <Dropdown newPlaceholder="Tipo de identificación" createNewLine={true}/>
                    <SmallInput newPlaceholder="Número de cuenta" />
                    <SmallInput newPlaceholder="Número de cuenta" />
                    <MediumInput newPlaceholder="Nombre del banco" />
                    <MediumDropdown newPlaceholder="Estado civil"/>
                    <SmallInput newPlaceholder="Número de cuenta" />
                    <LargeInput newPlaceholder="Dirección" />
                    <MediumInput newPlaceholder="Tiempo de conocer al referido" />
                    <MediumInput newPlaceholder="Email" />

                    <SaveCancel />

                </div>


                </div>

                
            </main>
        </>
    )
}
