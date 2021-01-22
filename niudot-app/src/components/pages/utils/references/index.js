import React from "react"

import RetractileForm from "../retractile_sections"
import Commercial from "./Commercial"
import Banking from "./Banking"
import Personal from "./Personal"

const Referencias = ({ options }) => {
	return (
		<RetractileForm formTitle="Referencias">
			<Commercial />
			<Banking options={options} />
			<Personal options={options} />
		</RetractileForm>
	)
}

export default Referencias
