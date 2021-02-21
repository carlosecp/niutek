import type { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

interface Props {}

const Alerts = ({}: Props) => {
	const alerts = useSelector((state: RootState) => state.alerts)

	return (
		<div className='mt-14 fixed top-0 right-0 z-40'>
			<ul className='p-4 flex flex-col gap-2'>
				{alerts.alerts.map((alert) => (
					<li key={alert.id} className='rounded-lg bg-blue-200 text-sm p-2'>
						{alert.message}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Alerts
