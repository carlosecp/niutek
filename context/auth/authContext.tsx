import { createContext } from 'react'

export interface User {
	p_cod_sucursal: number
	p_cod_empresa: number
	p_clase_persona: number
}

export interface AuthStateType {
	user: User
}

const defaultValues = {
	user: {
		p_cod_sucursal: 0,
		p_cod_empresa: 1,
		p_clase_persona: 1
	}
}

const authContext = createContext<AuthStateType>(defaultValues)

export default authContext
