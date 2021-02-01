import React, { useEffect } from "react"
import RetractileForm from "../../../utils/retractile_sections"
import Commercial from "./Commercial"
import Banking from "./Banking"

const Referencias = ({ options }) => {
	useEffect(() => {
		console.log(options)
	}, [options])

	return (
		<RetractileForm formTitle="Referencias">
			<Commercial />
			<Banking options={options} />
		</RetractileForm>
	)
}

export default Referencias
