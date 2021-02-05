import React from "react"

const NewFormBtn = ({ text, toggleForm }) => {
	return (
		<div className="section">
			<div className="">
				<h2 className="text-black-white font-bold text-xl">
					{text.title}
				</h2>
				<p className="text-gray-gray">{text.description}</p>
			</div>
			<button
				className="mt-4 btn bg-blue-blue btn-border-blue"
				onClick={toggleForm}
			>
				{text.proceed}
			</button>
		</div>
	)
}

export default NewFormBtn
