import React, { useState } from 'react'

import PageMenu from '../../utils/PageMenu'
import SearchUserForm from '../../utils/SearchUserForm'

import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PersonaNaturalCreate from './PersonaNaturalCreate'

// * Comentarios para Juan
{
	/* Esta es la pantalla principal de Persona Natural, aca no hay muchas cosas interesantes la verdad. Acuerdense de que 	ustedes van a cambiar algo aca porque tenemos el menu de la derecha... Pero de eso ya no se yo... Asi que ahora podes avanzar a PersonaNaturalCreate...
	 */
}

function PersonaNatural() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const [activeSection, setActiveSection] = useState(
		'datos-profesionales-y-economicos'
	)

	const sections = [
		'datos-profesionales-y-economicos',
		'referencias',
		'comerciales',
		'bancarias',
		'personales'
	]

	return (
		<>
			<div>
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<PersonaNaturalCreate />
				)}
			</div>
			<PageMenu
				activeSection={activeSection}
				setActiveSection={setActiveSection}
				sections={sections}
			/>
		</>
	)
}

export default PersonaNatural
