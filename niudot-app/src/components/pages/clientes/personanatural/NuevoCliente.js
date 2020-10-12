import React from 'react'
import {
	FormTextInput,
	FormCheckboxInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'

// * Comentarios para Juan
{
	/* NuevoCliente es simplemente una de las muchas secciones que podemos tener dentro de una pagina, algunas van a estar entro de Retractile forms, pero todas funcionan igual practicamente. Tenemos tres tipos de componentes por ahora, faltan las tablas creo solamente:
	
		1. FormTextInput: No se utiliza solamente para texto, puede ser para numeros tambien. Requiere como minimo 4 propiedades (name, classes, placholder y label).
			=> name: Esta propiedad debe llevar el valor que representa esta input para Formik. Te acordas del archivo de initialValues, bueno, esos nombres, cada value representaba a una input, que debe llevar como propiedad name ese value.
			=> classes: Solo especifica el size de la input, acordate de xl, sm-nl, md-nl, etc...
			=> placeholder: Pues, el placeholder.
			=> label: Es el label claro, ahorita si vez estan igual que los placeholders, pero realmente los placeholders deberian ser ejemplos del texto a ingresar, label es el titulo.

		Si queremos utilizar la input como input de numeros en vez de texto, es importante indicarlo, ya que estamos utilizando validacion nativa HTML. Para esto vas a tener que pasar ademas de los atributos anteriormente mencionados, un atributo type='number' y un atributo min='0', para indicar el valor minimo.

		Este tipo de input tambien te sirve si queres validar correos electronicos, para esto hacer algo similar a lo que hiciste con valor numerico, solo que le pasas type='email', y esta cosa de aca pattern='\w+@\w+\.\w+'.

		======================================

		2. FormDropdownInput: Y pues, estos son los dropdowns. Tambien recibe las propiedades name, classes y label. Y como hijo recibe las opciones, cada una con una propiedad value.

		======================================

		3. FormCheckboxInput: Son las checkboxes. Acepta tambien los valores name, classes y label, pero, para el texto que tienen dentro las checkboxes, toma la propiedad title.

		======================================

		Y ya... eso es todo. Cualquier cosa nos preguntas. Como podes ver no hicimos la autenticacion, pero intentamos refactorizar la validacion, quedo bastante buena. Ahora ya pode seguir con el menu, y luego nos ponemos a hacer pantallas (cosa que llevo diciendo durante una semana), quiza faltaria renderizar las tablas, eso lo vamos haciendo durante esta semana.
	*/
}

function NuevoCliente() {
	return (
		<div className='form-container'>
			<FormTextInput
				name='create_codigo_cliente'
				classes='md'
				placeholder='Código de Cliente'
				label='Código de Cliente'
			/>
			<FormTextInput
				name='create_nombres'
				classes='lg-nl'
				placeholder='Nombres'
				label='Nombres'
			/>
			<FormTextInput
				name='create_apellidos'
				classes='lg'
				placeholder='Apellidos'
				label='Apellidos'
			/>

			<FormDropdownInput
				classes='lg'
				name='create_tipo_id'
				label='Tipo Identificación'
			>
				<option value='option_1'>Option 1</option>
				<option value='option_2'>Option 2</option>
				<option value='option_3'>Option 3</option>
				<option value='option_4'>Option 4</option>
			</FormDropdownInput>

			<FormTextInput
				name='create_numero_id'
				classes='lg'
				placeholder='No. Identificación'
				label='No. Identificación'
			/>
			<FormTextInput
				name='create_nacionalidad'
				classes='lg'
				placeholder='Nacionalidad'
				label='Nacionalidad'
			/>
			<FormTextInput
				name='create_fecha_nacimiento'
				classes='lg'
				placeholder='Fecha de Nacimiento'
				label='Fecha de Nacimiento'
			/>
			<FormTextInput
				name='create_estado_civil'
				classes='sm'
				placeholder='Estado Civil'
				label='Estado Civil'
			/>
			<FormTextInput
				name='create_numero_hijos'
				classes='sm'
				placeholder='Número de Hijos'
				label='Número de Hijos'
				type='number'
				min='0'
			/>
			<FormTextInput
				name='create_direccion'
				classes='xl'
				placeholder='Dirección'
				direccion='Dirección'
			/>
			<FormTextInput
				name='create_telefono_1'
				classes='sm'
				placeholder='Teléfono 1'
				label='Teléfono 1'
			/>
			<FormTextInput
				name='create_telefono_2'
				classes='sm'
				placeholder='Teléfono 2'
				label='Teléfono 2'
			/>
			<FormTextInput
				name='create_municipio'
				classes='sm'
				placeholder='Municipio'
				label='Municipio'
			/>
			<FormTextInput
				name='create_departamento'
				classes='sm'
				placeholder='Departamento'
				label='Departamento'
			/>

			<FormCheckboxInput
				label='Esta es mi label'
				name='create_cargo_publico'
				classes='lg'
				title='Acepto que Java me gusta'
			/>
		</div>
	)
}

export default NuevoCliente
