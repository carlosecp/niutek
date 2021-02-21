const initialState = {
	user: {
		p_cod_sucursal: 0,
		p_cod_empresa: 1
	}
}

interface Action {
	type: string
}

export const authReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		default:
			return state
	}
}
