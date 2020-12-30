import React, { useEffect, useState } from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import { FaRegBell } from 'react-icons/fa'
import { dummyData } from '../dashboard/dummy'

function NotificationCard({ notification: { label, value } }) {
	return (
		<div className='p-4 bg-gray-100 col-span-2 rounded border-2 border-gray-200 flex items-center dark:bg-gray-cstm-1 dark:border-gray-cstm-3 sm:col-span-6'>
			<div className='flex flex-col flex-1'>
				<h2 className='text-2xl font-bold dark:text-white'>{value}</h2>
				<small className='dark:text-gray-cstm-14'>{label}</small>
			</div>
			<div className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition hover:text-white dark:text-white'>
				<FaRegBell size={24} />
			</div>
		</div>
	)
}

function DashboardStat({ stat }) {
	return (
		<div className='p-4 bg-gray-100 col-span-3 rounded border-2 border-gray-200 sm:col-span-6 dark:bg-gray-cstm-1 dark:border-gray-cstm-3 sm:col-span-6'>
			<Doughnut
				data={stat}
				options={{
					tooltips: {
						enabled: false
					}
				}}
			/>
			{stat.title}
			{stat.value}
		</div>
	)
}

function Dashboard() {
	const [chartsData, setChartsData] = useState({
		notifications: [],
		mainChart: {},
		stats: []
	})

	function updateData({ notifications, stats, mainChart }) {
		const mainChartLabels = [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'May',
			'Jun',
			'Jul',
			'Ago',
			'Sep',
			'Oct',
			'Nov',
			'Dic'
		]

		setChartsData({
			mainChart: {
				labels: mainChartLabels,
				datasets: [
					{
						label: 'Grafico',
						data: mainChart.data,
						backgroundColor: 'transparent',
						borderColor: 'rgba(59, 130, 246, 0.5)',
						lineTension: 0.1,
						pointBackgroundColor: '#3B82F6',
						pointRadius: 4,
						pointHitRadius: 10,
						pointHoverRadius: 8
					}
				]
			},
			stats: stats.map((stat) => {
				const styledStat = {
					...stat,
					datasets: stat.datasets.map((dataset) => {
						return {
							...dataset,
							backgroundColor: ['#3B82F6', 'rgba(59, 130, 246, 0.5)']
						}
					})
				}
				return styledStat
			}),
			notifications
		})
	}

	useEffect(() => {
		updateData(dummyData)
	}, [])

	return (
		<div className='max-w-4xl'>
			<div className='grid grid-cols-6 gap-3'>
				{chartsData.notifications.map((notification) => (
					<NotificationCard notification={notification} />
				))}
			</div>
			<div className='mt-3 grid grid-cols-6 gap-3'>
				{chartsData.stats &&
					chartsData.stats.map((stat) => (
						<DashboardStat key={stat} stat={stat} />
					))}
			</div>
			<div className='my-3 p-4 bg-gray-100 rounded border-2 border-gray-200 dark:bg-gray-cstm-1 dark:border-gray-cstm-3'>
				<Line data={chartsData.mainChart} options={mainChartOptions} />
			</div>
		</div>
	)
}

const mainChartOptions = {
	responsive: true,
	legend: {
		display: false
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					display: false
				}
			}
		],
		yAxes: [
			{
				ticks: {
					suggestedMax: 100
				}
			}
		]
	}
}

export default Dashboard
