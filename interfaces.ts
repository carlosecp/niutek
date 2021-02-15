import type {
	valuesPersonaNatural,
	validationsPersonaNatural,
} from './data/clientes/persona_natural/data'

export type searchConfig = {
	title: string
	heading: string
	description: string
	labels: {
		searchbox: string
		button: string
	}
	url: string
}

// Tipos utilizados en los buscadores. Todos los buscadores se comportan igual, asi que se les pasa un generico que determina el tipo de la respuesta. Son utilizados en las paginas de index de cada pantalla que contiene un buscado, por ejemplo: /pages/clientes/persona_natural/index.tsx. Son genericos del componente Search: /components/search/Search.tsx
export type searchPersonaNatural = {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

export type searchPersonaJuridica = {
	cod_cliente: number
	nombre: string
	description: string
}

export type searchProducto = {
	cod_producto: number
	nombre: string
}

export type searchResults =
	| searchPersonaNatural
	| searchPersonaJuridica
	| searchProducto

// initialValues y validations por menu (conjuncion de submenus)
// Cada menu y submenu tiene sus directorios y subdirectorios en /data/[subdir], que a su vez continenen un archivo principal: data.tsx (no llamado index.ts para mantener la condura). De ahi se exportan todas los tipos correspondientes a cada submenu (no a cada menu principal)
type valuesClientes = valuesPersonaNatural
type validationsClientes = validationsPersonaNatural

// Tipos utilizados para FormPage.tsx, que toma los initialValues y validaciones de Yup como prop (de diferentes paginas, por eso se utilzan genericos)
export type globalInitialValues = valuesClientes
export type globalValidationSchemas = validationsClientes
