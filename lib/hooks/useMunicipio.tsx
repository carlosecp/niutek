import type { MuniOption } from '../interfaces'
import * as React from 'react'
import getMunicipio from '../api/getMunicipio'

const useMunicipio = (codDepto: number) => {
	const [municipios, setMunicipios] = React.useState<MuniOption[]>([])
	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		if (codDepto !== 0) {
			setLoading(true)
			getMunicipio(codDepto, setMunicipios, setLoading)
		}
	}, [codDepto])

	React.useDebugValue({
		municipios,
		loading
	})

	return {
		values: municipios,
		loading
	}
}

export default useMunicipio
