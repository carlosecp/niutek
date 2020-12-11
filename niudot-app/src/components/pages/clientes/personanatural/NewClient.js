import React from 'react'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'

// * Comentarios
{
	/* NuevoCliente es simplemente una de las muchas secciones que podemos tener dentro de una pagina, algunas van a estar entro de Retractile forms, pero todas funcionan igual practicamente. Tenemos tres tipos de componentes por ahora, faltan las tablas creo solamente:
	
		1. FormTextInput: No se utiliza solamente para texto, puede ser para numeros tambien. Requiere como minimo 4 propiedades (name, size, placholder y label).
			=> name: Esta propiedad debe llevar el valor que representa esta input para Formik. Te acordas del archivo de initialValues, bueno, esos nombres, cada value representaba a una input, que debe llevar como propiedad name ese value.
			=> size: Solo especifica el size de la input, acordate de xl, sm-nl, md-nl, etc...
			=> placeholder: Pues, el placeholder.
			=> label: Es el label claro, ahorita si vez estan igual que los placeholders, pero realmente los placeholders deberian ser ejemplos del texto a ingresar, label es el titulo.

		Si queremos utilizar la input como input de numeros en vez de texto, es importante indicarlo, ya que estamos utilizando validacion nativa HTML. Para esto vas a tener que pasar ademas de los atributos anteriormente mencionados, un atributo type='number' y un atributo min='0', para indicar el valor minimo.

		Este tipo de input tambien te sirve si queres validar correos electronicos, para esto hacer algo similar a lo que hiciste con valor numerico, solo que le pasas type='email', y esta cosa de aca pattern='\w+@\w+\.\w+'.

		======================================

		2. FormDropdownInput: Y pues, estos son los dropdowns. Tambien recibe las propiedades name, size y label. Y como hijo recibe las opciones, cada una con una propiedad value.

		======================================

		3. FormCheckboxInput: Son las checkboxes. Acepta tambien los valores name, size y label, pero, para el texto que tienen dentro las checkboxes, toma la propiedad title.

		======================================

		Y ya... eso es todo. Cualquier cosa nos preguntas. Como podes ver no hicimos la autenticacion, pero intentamos refactorizar la validacion, quedo bastante buena. Ahora ya pode seguir con el menu, y luego nos ponemos a hacer pantallas (cosa que llevo diciendo durante una semana), quiza faltaria renderizar las tablas, eso lo vamos haciendo durante esta semana.
	*/
}

function NuevoCliente() {
	return (
		<>
			<div className='form-grid-layout'>
				<FormTextInput
					name='create_codigo_cliente'
					size='md'
					placeholder='Código de Cliente'
					label='Código de Cliente'
				/>
				<FormTextInput
					name='create_nombres'
					size='lg'
					placeholder='Nombres'
					label='Nombres'
					newLine={true}
				/>
				<FormTextInput
					name='create_apellidos'
					size='lg'
					placeholder='Apellidos'
					label='Apellidos'
				/>
				<FormDropdownInput
					size='lg'
					name='create_tipo_id'
					label='Tipo Identificación'
				>
					<option value='' >Tipo Identificación</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>
				<FormTextInput
					name='create_numero_id'
					size='lg'
					placeholder='No. Identificación'
					label='No. Identificación'
				/>
				<FormTextInput
					name='create_nacionalidad'
					size='lg'
					placeholder='Nacionalidad'
					label='Nacionalidad'
				/>
				<FormTextInput
					name='create_fecha_nacimiento'
					size='lg'
					placeholder='Fecha de Nacimiento'
					label='Fecha de Nacimiento'
				/>
				<FormTextInput
					name='create_estado_civil'
					size='sm'
					placeholder='Estado Civil'
					label='Estado Civil'
				/>
				<FormTextInput
					name='create_numero_hijos'
					size='sm'
					placeholder='Número de Hijos'
					label='Número de Hijos'
					type='number'
					min='0'
				/>
				<FormTextInput
					name='create_direccion'
					size='xl'
					placeholder='Dirección'
					label='Dirección'
				/>
				<FormTextInput
					name='create_telefono_1'
					size='sm'
					placeholder='Teléfono 1'
					label='Teléfono 1'
				/>
				<FormTextInput
					name='create_telefono_2'
					size='sm'
					placeholder='Teléfono 2'
					label='Teléfono 2'
				/>
				<FormTextInput
					name='create_municipio'
					size='sm'
					placeholder='Municipio'
					label='Municipio'
				/>
				<FormTextInput
					name='create_departamento'
					size='sm'
					placeholder='Departamento'
					label='Departamento'
				/>

				{/* <FormCheckboxInput
				label='Esta es mi label'
				name='create_cargo_publico'
				size='lg'
				title='Acepto que Java me gusta'
			/>  
			
			MUY POCOS CUMPLIDOS PARA JAVA, POR FAVOR ADORAR MAS - Atentamente, Juan Matus
			
			*/}
			</div>
		</>
	)
}

export default NuevoCliente
