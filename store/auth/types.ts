// State
export interface User {
	p_cod_sucursal: number
	p_cod_empresa: number
	p_clase_persona: number
}

export interface AuthState {
	user: User
}
