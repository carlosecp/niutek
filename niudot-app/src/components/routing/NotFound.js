import React from "react"

import { ChevronLeft } from "react-bootstrap-icons"
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
	return (
		<div className="w-full h-full flex justify-center items-center sm:px-8">
			<div className="max-w-sm p-4 rounded bg-blue-500 dark:bg-blue-700 text-white">
				<p className="text-xl font-bold">Pagina No Encontrada</p>
				<p className="my-2">
					Parece que siguió un enlace roto o ingresó una URL que no
					existe en este sitio.
				</p>
				<NavLink
					to="/"
					className="flex items-center gap-1 font-bold stroke-current pt-3 border-t-2 border-white"
				>
					<ChevronLeft />
					<strong className="hover:underline">Ir a Inicio</strong>
				</NavLink>
			</div>
		</div>
	)
}

const FormNotFound = () => {
	return (
		<div className="w-full h-full flex justify-center items-center sm:px-4">
			<div className="max-w-sm p-4 rounded bg-blue-500 dark:bg-blue-700 text-white">
				<p className="text-xl font-bold">Pagina No Encontrada</p>
				<p className="my-2">
					Parece que siguió un enlace roto o ingresó una URL que no
					existe en este sitio.
				</p>
				<NavLink
					to="/app/dashboard"
					className="flex items-center gap-1 font-bold stroke-current pt-3 border-t-2 border-white"
				>
					<ChevronLeft />
					<strong className="hover:underline">Ir a Inicio</strong>
				</NavLink>
			</div>
		</div>
	)
}

export { PageNotFound, FormNotFound }
