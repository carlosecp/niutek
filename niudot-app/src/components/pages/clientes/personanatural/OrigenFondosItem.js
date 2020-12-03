import React, { useState } from 'react'

function OrigenFondosItem({ children }) {
	const [checked, toggleChecked] = useState(false)

	return <div className='checkbox-description'>{children}</div>
}

export default OrigenFondosItem
