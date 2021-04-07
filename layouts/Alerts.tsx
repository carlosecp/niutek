import type { Alert } from '@/lib/interfaces'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FaTimes } from 'react-icons/fa'

interface Props {
	alerts: Alert[]
	remove: (id: string) => void
}

const Alerts = (props: Props) => {
	return (
		<TransitionGroup
			component='ul'
			className='sticky top-20 z-20 container max-w-3xl px-4 flex flex-col gap-2'
		>
			{props.alerts.map((alert) => (
				<CSSTransition key={alert.id} timeout={250} classNames='alert'>
					<li
						className={`alert alert-${
							alert.type === 'success' ? 'success' : 'warning'
						}`}
					>
						<p className='mr-auto'>
							<b>{alert.type === 'success' ? 'Exito' : 'Error'}: </b>
							{alert.message}
						</p>
						<FaTimes
							className='fill-current cursor-pointer'
							onClick={() => props.remove(alert.id)}
						/>
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default Alerts
