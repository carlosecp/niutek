import React from 'react'
import Topbar from '../../layout/Topbar';
import Description from '../../styled-components/Description';
import LargeTitle from '../../styled-components/LargeTitle';
import SmallMediumButton from '../../styled-components/SmallMediumButton';
import SearchInput from '../../styled-components/SearchInput';

export default function CrearPersonaNatural() {
	return (
		<>
			<Topbar topBarTitle="Crear Persona Natural"/>
			<main>
				<LargeTitle titleText="Buscar Cliente Existente" />
				<Description titleText="Buscar entre los clientes regristrados" />
				<SearchInput newPlaceholder="Buscar nuevo cliente"/>

				<LargeTitle titleText="Crear Un Nuevo Cliente" />
				<Description titleText="Registra un nuevo cliente" />

				<div className="form-container">
					<SmallMediumButton buttonText='Registrar nuevo cliente'/>
				</div>
			</main>
		</>
	)

}




