import type { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import AlertItem from './AlertItem'

interface Props {}

const Alerts = ({}: Props) => {
	const alerts = useSelector((state: RootState) => state.alerts)

	return (
		<ul className='container max-w-3xl px-4 flex flex-col gap-2'>
			{alerts.alerts.map((alert) => (
				<AlertItem key={alert.id} alert={alert} />
			))}
		</ul>
	)
}

export default Alerts
