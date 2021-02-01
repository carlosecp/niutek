import React, { useEffect } from "react"
import RetractileForm from "../../../utils/retractile_sections"
import Commercial from "./Commercial"
import Banking from "./Banking"
import Personal from "./Personal"

const Referencias = ({ options, loading }) => {
	useEffect(() => {
		console.log(options.p_moneda)
	}, [options])

	return (
		<RetractileForm formTitle="Referencias">
			<Commercial />
			<Banking options={options} loading={loading} />
			<Personal options={options} loading={loading} />
		</RetractileForm>
	)
}

export default Referencias
