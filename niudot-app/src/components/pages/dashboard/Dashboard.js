import React, { useEffect, useState } from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import { FaRegBell } from 'react-icons/fa'
import { dummyData } from '../dashboard/dummy'

function NotificationCard({ notification: { label, value } }) {
	return (
		<div className='p-4 bg-gray-100 col-span-2 rounded border-2 border-gray-200 flex items-center sm:col-span-3'>
			<div className='flex flex-col flex-1'>
				<h2 className='text-2xl font-bold'>{value}</h2>
				<small>{label}</small>
			</div>
			<div className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition hover:text-white'>
				<FaRegBell size={24} />
			</div>
		</div>
	)
}

function DashboardStat() {
	return (
		<div className='p-4 bg-gray-100 col-span-3 rounded border-2 border-gray-200'>
			<Doughnut />
		</div>
	)
}

function Dashboard() {
	const [chartsData, setChartsData] = useState({
		mainChart: {
			labels: [
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
			],
			datasets: [
				{
					label: 'Label Main Chart',
					data: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
				}
			]
		},
		statsCharts: [{}, {}]
	})

	function updateData() {}

	useEffect(() => {}, [])

	return (
		<div className='max-w-4xl'>
			<div className='grid grid-cols-6 gap-3'>
				{dummyData.notificationData.map((notification) => (
					<NotificationCard notification={notification} />
				))}
			</div>
			<div className='mt-3 grid grid-cols-6 gap-3'>
				{chartsData.statsCharts.map((stat) => (
					<DashboardStat />
				))}
			</div>
			<div className='my-3 p-4 bg-gray-100 col-span-2 rounded border-2 border-gray-200'>
				<Line
					data={chartsData.mainChart}
					options={{
						responsive: true,
						legend: {
							display: false
						}
					}}
				/>
			</div>
		</div>
	)
}

export default Dashboard
