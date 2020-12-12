import { useState } from 'react'
import RetractileFormTemplate from './RetractileFormTemplate'

export default function RetractileForm({ children, ...props }) {
	const retractionHook = useState(false)
	return RetractileFormTemplate({ retractionHook, children, ...props })
}
