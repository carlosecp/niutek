import type { Alert } from '../lib/interfaces'
import AlertItem from './AlertItem'

interface Props {
	alerts: Alert[]
	closeAlert: (id: string) => void
}

const Alerts = (props: Props) => {
	return (
		<ul className='sticky top-20 z-20 container max-w-3xl px-4 flex flex-col gap-2'>
			{props.alerts.map((alert) => (
				<AlertItem key={alert.id} alert={alert} closeAlert={props.closeAlert} />
			))}
		</ul>
	)
}

export default Alerts
