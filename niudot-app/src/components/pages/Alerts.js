import React, { useContext } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import alertsContext from '../../context/alerts/alertsContext'

const Alerts = () => {
	const { alerts } = useContext(alertsContext)

	if (alerts) {
		return (
			<TransitionGroup className='alerts-container'>
				{alerts.map((alert) => (
					<CSSTransition
						key={alert.id}
						in={true}
						appear={true}
						classNames='fade'
						timeout={300}
					>
						<div className='alert'>{alert.msg}</div>
					</CSSTransition>
				))}
			</TransitionGroup>
		)
	}
}

export default Alerts
