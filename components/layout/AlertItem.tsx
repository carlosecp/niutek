import type { Alert } from '../../store/alerts/types'

interface Props {
	alert: Alert
}

const AlertItem = ({ alert }: Props) => {
	return (
		<li
			className={`alert alert-${
				alert.type === 'success' ? 'success' : 'warning'
			}`}
		>
			<b>{alert.type === 'success' ? 'Exito' : 'Error'}: </b>
			{alert.message}
		</li>
	)
}

export default AlertItem
