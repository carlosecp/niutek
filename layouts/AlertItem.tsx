import type { Alert } from '../lib/interfaces'
import { FaTimes } from 'react-icons/fa'

interface Props {
	alert: Alert
	remove: (id: string) => void
}

const AlertItem = (props: Props) => {
	return (
		<li
			className={`alert alert-${
				props.alert.type === 'success' ? 'success' : 'warning'
			}`}
		>
			<p className='mr-auto'>
				<b>{props.alert.type === 'success' ? 'Exito' : 'Error'}: </b>
				{props.alert.message}
			</p>
			<FaTimes
				className='fill-current cursor-pointer'
				onClick={() => props.remove(props.alert.id)}
			/>
		</li>
	)
}

export default AlertItem
