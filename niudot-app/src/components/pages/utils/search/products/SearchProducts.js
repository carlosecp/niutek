import React from "react"
import axios from "axios"
import { Field, Form, Formik, useFormikContext } from "formik"
import * as Yup from "yup"
import requestConfig from "../../../../../utils/requestConfig"
import spinner from "../../../../../assets/images/spinner.png"
import { Dropdown } from "../../forms"
import { FaSearch } from "react-icons/fa"

const SearchProduct = ({
	loading,
	setLoading,
	matches,
	setMatches,
	fetchProduct,
	fetchingProduct,
}) => {
	const getProducts = async (data) => {
		setLoading(true)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/search/producto`,
				{ search: data, p_cod_empresa: 1 },
				requestConfig
			)
			console.log(res.data)
			setMatches(res.data)
		} catch (err) {
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="section mb-4">
			<h2 className="text-black-white font-bold text-xl">
				Buscar Producto Existente
			</h2>
			<p className="text-gray-gray">
				Buscar entre los productos registrados.
			</p>
			<Formik
				initialValues={{ search: "", productId: null }}
				validationSchema={Yup.object({
					search: Yup.mixed().required(),
				})}
				onSubmit={(values) => {
					getProducts(values.search)
					values.productId = 0
				}}
			>
				<Form>
					<ControlledForms
						loading={loading}
						matches={matches}
						fetchProduct={fetchProduct}
						fetchingProduct={fetchingProduct}
					/>
				</Form>
			</Formik>
		</div>
	)
}

const ControlledForms = ({
	loading,
	matches,
	fetchProduct,
	fetchingProduct,
}) => {
	const {
		values: { productId },
	} = useFormikContext()

	const handleSubmit = () => {
		if (productId) {
			fetchProduct(productId)
		}
	}

	return (
		<>
			<div className="mt-2">
				<label className="text-black-white font-bold">
					Nombre del Producto
				</label>
				<div className="flex gap-2 w-72 sm:w-56">
					<Field
						name="search"
						type="text"
						className="form-field flex-1"
						placeholder="Nombre del Producto"
					/>
					<button
						type="submit"
						className={`w-std h-std rounded flex justify-center items-center cursor-pointer ${
							loading
								? "btn-disabled btn-border-disabled cursor-wait"
								: "bg-blue-blue btn-border-blue"
						}`}
					>
						{loading ? (
							<img
								src={spinner}
								alt="Loading..."
								className="w-6 h-6 animate-spin"
							/>
						) : (
							<FaSearch />
						)}
					</button>
				</div>
			</div>
			<div className="mt-2 form-grid-layout">
				<Dropdown label="Productos" size="md" name="productId">
					<option
						value="0"
						selected={true}
						disabled
						label="Seleccione"
					/>
					{matches.map((product) => (
						<option
							key={product.cod_producto}
							value={product.cod_producto}
						>
							{product.cod_producto} - {product.nombre}
						</option>
					))}
				</Dropdown>
			</div>
			<button
				type="button"
				className={`mt-3 btn flex items-center gap-2 ${
					fetchingProduct || !productId
						? fetchingProduct
							? "btn-disabled cursor-wait"
							: "btn-disabled cursor-not-allowed"
						: "bg-blue-blue btn-border-blue"
				}`}
				onClick={handleSubmit}
			>
				{fetchingProduct || !productId
					? fetchingProduct
						? "Leyendo Producto"
						: "Seleccione Producto"
					: "Editar Producto"}
			</button>
		</>
	)
}

export default SearchProduct
