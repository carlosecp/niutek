import type { searchConfig, searchResults } from '../../../types'
import axios from 'axios'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'
import { Text } from '../forms/Fields'

// Determina el tipo de configuracion de la request que se va a realizar. Recordemos que al componente principal de este archivo: Search, se le pasa un generico que determina el tipo de respuesta que se espera recibir.
type searchRequest<T> = {
	url: string
	body: { search: string }
}

// Esta es solo la funcion que se ejecuta cuando mandamos a buscar algun cliente. Nos devuelve un arreglo de tipo T[], generico que recibe el componente Search para determinar el tipo de valores que regresa la busqueda.
const getSearch = async <T extends searchResults>({
	url,
	body,
}: searchRequest<T>) => {
	const req = {
		path: `${process.env.backend}/${url}`,
		body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
		},
	}

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers,
		})

		console.log(res.data)
		return res.data as T[]
	} catch (err) {
		return [] as T[]
	}
}

// El componente Search realiza las busquedas de todas las pantallas que lo ameriten, sin embargo, debido a que los diferentes buscadores retornan diferentes tipos de items, como por ejemplo clientes !== productos !== cheques, etc... entonces debemos pasar el generico, que determina el tipo de respuesta que esperamos dentro del array que nos retorna el metodo getSearch() (arriba).

// Tambien se le esta pasando la funcion que se encarga de actualizar el state que luego se utiliza para mostrar los resultados en SearchResults.tsx, esta funcion toma el mismo generico, ya que espera un arreglo de ese tipo de dato.
type Props<T> = {
	searchConfig: searchConfig
	updateResults: (x: T[]) => void
}

// Componente en si
const Search = <T extends searchResults>({
	searchConfig,
	updateResults,
}: Props<T>) => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				const results = await getSearch<T>({
					url: searchConfig.url,
					body: values,
				})
				updateResults(results)
				setSubmitting(false)
			}}
		>
			{({
				values,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<form className='mx-auto' onSubmit={handleSubmit}>
					<div
						className={`w-full flex ${isSubmitting && 'disabled'}`}
					>
						<Text
							name='search'
							overrideClasses='p-2 rounded-l outline-none border'
							placeholder={searchConfig.labels.searchbox}
							value={values.search}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<button
							type='submit'
							className='w-12 flex-center bg-blue-500 rounded-r transition cursor-pointer text-white disabled:disabled outline-none'
							disabled={isSubmitting}
						>
							<FaSearch className={`transition text-current`} />
						</button>
					</div>
				</form>
			)}
		</Formik>
	)
}

export default Search
