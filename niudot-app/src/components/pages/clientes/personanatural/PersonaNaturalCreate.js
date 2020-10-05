import React from 'react'
import { Formik, Form } from 'formik'
import { FaChevronDown } from 'react-icons/fa'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import {
	FormTextInput,
	FormCheckboxInput
} from '../../utils/formikComponentsEndpoint'
import TextInput from '../../utils/formikComponents/TextInput'

function PersonaNaturalCreate() {
	return (
		<Formik
			initialValues={{
				codigoCliente: '',
				nombres: '',
				apellidos: '',
				tipoId: '',
				numeroId: '',
				nacionalidad: '',
				fechaNacimiento: '',
				estadoCivil: '',
				numeroHijos: 0,
				direccion: '',
				telefono1: '',
				telefono2: '',
				municipio: '',
				departamento: '',
				cargoPublico: false
			}}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<div className='form'>
				<div className='form-title-container'>
					<h2>Crear Un Nuevo Cliente</h2>
					<p className='form-description'>Registra un nuevo cliente.</p>
				</div>
				<Form className='form-container'>
					<FormTextInput
						name='codigoCliente'
						classes='md'
						placeholder='Código de Cliente'
					/>
					<FormTextInput name='nombres' classes='lg-nl' placeholder='Nombres' />
					<FormTextInput
						name='apellidos'
						classes='lg'
						placeholder='Apellidos'
					/>

					{/* Falta convertir los selection a Formik */}
					<div className='form-field-lg'>
						<TextInput
							name='tipoId'
							type='text'
							className='std-input rounded-l'
							placeholder='Tipo de Identificacion'
						/>
						<div className='btn input-btn-transparent rounded-r'>
							<FaChevronDown />
						</div>
					</div>

					<FormTextInput
						name='numeroId'
						classes='lg'
						placeholder='No. Identificacion'
					/>
					<FormTextInput
						name='nacionalidad'
						classes='lg'
						placeholder='Nacionalidad'
					/>
					<FormTextInput
						name='fechaNacimiento'
						classes='lg'
						placeholder='Fecha de Nacimiento'
					/>
					<FormTextInput
						name='estadoCivil'
						classes='sm'
						placeholder='Estado Civil'
					/>
					<FormTextInput
						name='numeroHijos'
						classes='sm'
						placeholder='Número de Hijos'
					/>
					<FormTextInput
						name='direccion'
						classes='xl'
						placeholder='Dirección'
					/>
					<FormTextInput
						name='telefono1'
						classes='sm'
						placeholder='Teléfono 1'
					/>
					<FormTextInput
						name='telefono2'
						classes='sm'
						placeholder='Teléfono 2'
					/>
					<FormTextInput
						name='municipio'
						classes='sm'
						placeholder='Municipio'
					/>
					<FormTextInput
						name='departamento'
						classes='sm'
						placeholder='Departamento'
					/>
					{/* 
					<div className='form-field-lg'>
						<div className='std-input rounded'> */}

					<FormCheckboxInput
						label='Esta es mi label'
						name='cargoPublico'
						classes='lg'
					/>

					<button type='submit'>Submit</button>
				</Form>
				<DatosProfesionalesEconomicos />
				<Referencias />
			</div>
		</Formik>
	)
}

export default PersonaNaturalCreate
