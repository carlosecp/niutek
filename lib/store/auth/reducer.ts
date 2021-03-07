import type { User, AuthState } from './types'

const initialState: AuthState = {
	user: {
		p_cod_sucursal: 0,
		p_cod_empresa: 1,
		p_clase_persona: 1
	}
}

export const authReducer = (state = initialState): AuthState => {
	return state
}
