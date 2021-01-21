import React, { useEffect, useContext } from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"

import authContext from "../../context/auth/authContext"

import { Text } from "../pages/utils/forms"
import Navbar from "./Navbar"

const Login = (props) => {
	// Username es realmente el email
	const initialValues = {
		username: "",
		password: "",
	}

	const { user, loadUser, loginUser, isAuthenticated } = useContext(
		authContext
	)

	useEffect(() => {
		if (isAuthenticated && user) {
			if (user.type === "client") {
				props.history.push("/app/dashboard")
			} else if (user.type === "admin") {
				props.history.push("/admin/register")
			}
			loadUser()
		}
		// eslint-disable-next-line
	}, [isAuthenticated, user])

	const handleSubmit = async (values) => {
		loginUser(values)
	}

	return (
		<>
			<Navbar />
			<div className="bg-white dark:bg-gray-cstm-1 m-auto h-full flex flex-col justify-center items-center sm:block sm:pt-36">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-black-white font-bold text-3xl select-none">
						Bienvenido
					</h1>
					<Formik
						initialValues={initialValues}
						validationSchema={Yup.object({
							username: Yup.string()
								.email("Correo Electrónico Invalido")
								.required("Correo Electrónico Requerido"),
							password: Yup.string()
								.required("Contraseña Requerida")
								.min(6, "Minimo 6 caracteres"),
						})}
						onSubmit={(values) => handleSubmit(values)}
					>
						<Form>
							<div className="mt-12 mb-6 w-80 sm:w-64">
								<div className="mb-2">
									<Text
										name="username"
										placeholder="Correo Electrónico"
										label="Correo Electrónico"
										boldLabel={true}
									/>
								</div>
								<div>
									<Text
										name="password"
										placeholder="Contraseña"
										label="Contraseña"
										type="password"
										boldLabel={true}
									/>
								</div>
							</div>
							<button className="btn w-full bg-blue-blue">
								Ingresar
							</button>
						</Form>
					</Formik>
					<p className="mt-6 font-bold text-blue-700 dark:text-blue-500 cursor-pointer hover:underline">
						Recuperar Contraseña
					</p>
				</div>
			</div>
		</>
	)
}

export default Login
