import * as React from 'react'
import authContext, { AuthStateType } from './authContext'

interface Props {
	children: React.ReactNode
}

const defaultValues = {
	user: {
		p_cod_sucursal: 0,
		p_cod_empresa: 1,
		p_clase_persona: 1
	}
}

const AuthState = ({ children }: Props) => {
	const [authState, setAuthState] = React.useState<AuthStateType>(defaultValues)

	return (
		<authContext.Provider value={authState}>{children}</authContext.Provider>
	)
}

export default AuthState
