import React from 'react'
import { Formik, Field, Form } from 'formik'
import { FaChevronDown } from 'react-icons/fa'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import { TextInput, CheckboxInput } from '../../utils/formikComponents'

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
					<div className='form-field-md'>
						<TextInput
							name='codigoCliente'
							type='text'
							className='std-input rounded'
							placeholder='Código de Cliente'
						/>
					</div>
					<div className='form-field-lg-nl'>
						<TextInput
							name='nombres'
							type='text'
							className='std-input rounded'
							placeholder='Nombres'
						/>
					</div>
					<div className='form-field-lg'>
						<TextInput
							name='apellidos'
							type='text'
							className='std-input rounded'
							placeholder='Apellidos'
						/>
					</div>
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
					<div className='form-field-lg'>
						<TextInput
							name='numeroId'
							type='text'
							className='std-input rounded'
							placeholder='No. Identificacion'
						/>
					</div>
					<div className='form-field-lg'>
						<TextInput
							name='nacionalidad'
							type='text'
							className='std-input rounded'
							placeholder='Nacionalidad'
						/>
					</div>
					<div className='form-field-lg'>
						<TextInput
							name='fechaNacimiento'
							type='text'
							className='std-input rounded'
							placeholder='Fecha de Nacimiento'
						/>
					</div>
					<div className='form-field-sm'>
						<TextInput
							name='estadoCivil'
							type='text'
							className='std-input rounded'
							placeholder='Estado Civil'
						/>
					</div>
					<div className='form-field-sm'>
						<TextInput
							name='numeroHijos'
							type='text'
							className='std-input rounded'
							placeholder='Número de Hijos'
						/>
					</div>
					<div className='form-field-xl'>
						<TextInput
							name='direccion'
							type='text'
							className='std-input rounded'
							placeholder='Dirección'
						/>
					</div>
					<div className='form-field-sm'>
						<TextInput
							name='telefono1'
							type='text'
							className='std-input rounded'
							placeholder='Teléfono 1'
						/>
					</div>
					<div className='form-field-sm'>
						<TextInput
							name='telefono2'
							type='text'
							className='std-input rounded'
							placeholder='Teléfono 2'
						/>
					</div>
					<div className='form-field-sm'>
						<TextInput
							name='municipio'
							type='text'
							className='std-input rounded'
							placeholder='Municipio'
						/>
					</div>
					<div className='form-field-sm'>
						<TextInput
							name='departamento'
							type='text'
							className='std-input rounded'
							placeholder='Departamento'
						/>
					</div>
					<div className='form-field-lg'>
						<div className='std-input rou'>
							<Field type='checkbox' name='cargoPublico' />
						</div>
					</div>
					<button type='submit'>Submit</button>
				</Form>
				<DatosProfesionalesEconomicos />
				<Referencias />
			</div>
		</Formik>
	)
}

export default PersonaNaturalCreate
