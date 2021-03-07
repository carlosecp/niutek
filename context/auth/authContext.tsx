import { createContext } from 'react'

export interface User {
	p_cod_sucursal: number
	p_cod_empresa: number
	p_clase_persona: number
}

export interface AuthStateType {
	user: User
}

const authContext = createContext<AuthStateType | null>(null)

export default authContext
