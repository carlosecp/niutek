const writeData = async (values: Values, key: string) => {
	const reqType = editingExisting ? 'modifica' : 'registra'

	const req = {
		path: `${process.env.backend}/proc/${reqType}/${props.url.write}`,
		body: {
			p_cod_empresa: auth.user.p_cod_empresa,
			p_cod_sucursal: auth.user.p_cod_sucursal,
			p_clase_persona: auth.user.p_clase_persona,
			[key]: currentId,
			...values
		},
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	setLoading(true)

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers
		})

		setAlerts([
			...alerts,
			{
				id: uuidv4(),
				message: `${res.data.success}`,
				type: 'success'
			}
		])
	} catch (err) {
		setAlerts([
			...alerts,
			{
				id: uuidv4(),
				message: `${err.message}`,
				type: 'warning'
			}
		])
	} finally {
		console.groupEnd()
		setLoading(false)
	}
}
